import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { validateEmail, validatePhone } from '@/lib/utils/validators'

interface ContactPayload {
  name?: unknown
  phone?: unknown
  email?: unknown
  date?: unknown
  time?: unknown
  service?: unknown
  message?: unknown
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  const date = typeof payload.date === 'string' ? payload.date.trim() : ''
  const time = typeof payload.time === 'string' ? payload.time.trim() : ''
  const service = typeof payload.service === 'string' ? payload.service.trim() : ''
  const message = typeof payload.message === 'string' ? payload.message.trim() : ''
  const errors: { field: string; message: string }[] = []

  if (!name) errors.push({ field: 'name', message: 'Full name is required' })
  else if (name.length > 150) errors.push({ field: 'name', message: 'Name must be 150 characters or fewer' })
  if (!phone) errors.push({ field: 'phone', message: 'Phone number is required' })
  else if (!validatePhone(phone)) errors.push({ field: 'phone', message: 'Enter a valid 10-digit Indian mobile number' })
  if (!email) errors.push({ field: 'email', message: 'Email address is required' })
  else if (!validateEmail(email)) errors.push({ field: 'email', message: 'Enter a valid email address' })
  else if (email.length > 254) errors.push({ field: 'email', message: 'Email address must be 254 characters or fewer' })
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(Date.parse(`${date}T00:00:00Z`)) ||
      new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date)) {
    errors.push({ field: 'date', message: 'Enter a valid preferred date' })
  }
  if (time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
    errors.push({ field: 'time', message: 'Enter a valid preferred time' })
  }
  if (service.length > 100) errors.push({ field: 'service', message: 'Service must be 100 characters or fewer' })
  if (message.length > 500) errors.push({ field: 'message', message: 'Message must be 500 characters or fewer' })

  if (errors.length > 0) return NextResponse.json({ errors }, { status: 422 })

  const { DENTAL_API_URL, DENTAL_BOOKING_TOKEN } = process.env
  if (!DENTAL_API_URL || !DENTAL_BOOKING_TOKEN) {
    console.error('Appointment storage is not configured. Set DENTAL_API_URL and DENTAL_BOOKING_TOKEN.')
    return NextResponse.json({ error: 'Appointment booking is temporarily unavailable. Please call the clinic.' }, { status: 503 })
  }

  let bookingResponse: Response
  try {
    bookingResponse = await fetch(DENTAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DENTAL_BOOKING_TOKEN}`,
      },
      body: JSON.stringify({ name, phone, email, date: date || null, time: time || null, service, message }),
      cache: 'no-store',
    })
  } catch (error) {
    console.error('Could not connect to the dental appointment service.', error)
    return NextResponse.json({ error: 'Appointment booking is temporarily unavailable. Please call the clinic.' }, { status: 503 })
  }

  if (!bookingResponse.ok) {
    const details = await bookingResponse.json().catch(() => null)
    console.error('Dental appointment service rejected the booking.', {
      status: bookingResponse.status,
      error: details && typeof details.error === 'string' ? details.error : 'Unknown service error',
    })
    return NextResponse.json({ error: 'We could not save your appointment request. Please call the clinic.' }, { status: 502 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CLINIC_EMAIL } = process.env
  if (SMTP_HOST && SMTP_USER && SMTP_PASS && CLINIC_EMAIL) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 587),
        secure: Number(SMTP_PORT || 587) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
      await transporter.sendMail({
        from: SMTP_USER,
        to: CLINIC_EMAIL,
        replyTo: email,
        subject: `New appointment enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Preferred date: ${date || 'Not specified'}`,
          `Preferred time: ${time || 'Not specified'}`,
          `Service: ${service || 'Not specified'}`,
          `Message: ${message || 'Not specified'}`,
        ].join('\n'),
      })
    } catch (error) {
      console.error('Appointment was saved, but the email notification could not be sent.', error)
    }
  } else {
    console.info('Appointment request saved. Email notification is not configured.')
  }

  return NextResponse.json({ ok: true })
}
