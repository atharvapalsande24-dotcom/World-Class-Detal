import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { validateEmail, validatePhone } from '@/lib/utils/validators'

interface ContactPayload {
  name?: unknown
  phone?: unknown
  email?: unknown
  date?: unknown
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

  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const message = typeof payload.message === 'string' ? payload.message.trim() : ''
  const errors: { field: string; message: string }[] = []

  if (!name) errors.push({ field: 'name', message: 'Full name is required' })
  if (!phone) errors.push({ field: 'phone', message: 'Phone number is required' })
  else if (!validatePhone(phone)) errors.push({ field: 'phone', message: 'Enter a valid 10-digit Indian mobile number' })
  if (!email) errors.push({ field: 'email', message: 'Email address is required' })
  else if (!validateEmail(email)) errors.push({ field: 'email', message: 'Enter a valid email address' })
  if (message.length > 500) errors.push({ field: 'message', message: 'Message must be 500 characters or fewer' })

  if (errors.length > 0) return NextResponse.json({ errors }, { status: 422 })

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CLINIC_EMAIL } = process.env
  if (SMTP_HOST && SMTP_USER && SMTP_PASS && CLINIC_EMAIL) {
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
        `Preferred date: ${String(payload.date || 'Not specified')}`,
        `Service: ${String(payload.service || 'Not specified')}`,
        `Message: ${message || 'Not specified'}`,
      ].join('\n'),
    })
  } else {
    console.info('Appointment enquiry received', { name, phone, email, date: payload.date, service: payload.service, message })
  }

  return NextResponse.json({ ok: true })
}
