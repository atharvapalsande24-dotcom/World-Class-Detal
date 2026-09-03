'use client'

import { useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import { validatePhone, validateEmail } from '@/lib/utils/validators'
import { services } from '@/lib/data/services'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', date: '', service: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!validatePhone(form.phone)) newErrors.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.email.trim()) newErrors.email = 'Email address is required'
    else if (!validateEmail(form.email)) newErrors.email = 'Enter a valid email address'
    if (form.message.length > 500) newErrors.message = 'Message must be 500 characters or fewer'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', date: '', service: '', message: '' })
      } else {
        const data = await res.json()
        if (data.errors) {
          const serverErrors: FormErrors = {}
          for (const err of data.errors) serverErrors[err.field as keyof FormErrors] = err.message
          setErrors(serverErrors)
        }
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-400 focus:ring-red-300' : 'border-neutral-200 focus:ring-primary/30'
    } bg-white text-neutral-900 focus:outline-none focus:ring-2 transition-colors`

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-8 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Received!</h3>
        <p className="text-green-700">We&apos;ll call you back within 24 hours to confirm your appointment.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-green-700 underline">
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700" role="alert">
          <AlertCircle size={20} className="flex-shrink-0" />
          <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Full Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={inputClass('name')}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone Number <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className={inputClass('phone')}
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={inputClass('email')}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">Preferred Date</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">Service of Interest</label>
          <select
            id="service"
            value={form.service}
            onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
          >
            <option value="">Select a service</option>
            {services.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          maxLength={500}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`${inputClass('message')} resize-none`}
          placeholder="Tell us about your concern or any questions you have..."
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
        />
        <p id="message-hint" className="mt-1 text-xs text-neutral-400">{form.message.length}/500 characters</p>
        {errors.message && <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {status === 'loading' ? (
          <>
            <LoadingSpinner size={20} />
            <span>Sending...</span>
          </>
        ) : (
          'Book Appointment'
        )}
      </button>
    </form>
  )
}
