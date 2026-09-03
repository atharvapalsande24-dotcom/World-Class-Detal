import type { Metadata } from 'next'
import { ContactForm } from '@/components/ui/ContactForm'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book an Appointment | World Class Dental Clinic, Pune',
  description: 'Get in touch with our team in Pune. Book your appointment at World Class Dental Clinic.',
}

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact Us</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Book an Appointment</h1>
        <p className="text-lg text-neutral-600">Tell us how we can help. Our team will call you back within 24 hours.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="p-6 sm:p-8 bg-neutral-50 rounded-2xl border border-neutral-200"><ContactForm /></div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-900">Visit World Class Dental Clinic</h2>
          <div className="space-y-4 text-neutral-600">
            <a href="tel:+919503008228" className="flex gap-3 items-start hover:text-primary"><Phone className="text-primary" size={20} />+91 95030 08228<br />+91 73870 40464</a>
            <a href="mailto:drpriyankasavkar@gmail.com" className="flex gap-3 items-start hover:text-primary"><Mail className="text-primary" size={20} />drpriyankasavkar@gmail.com</a>
            <p className="flex gap-3 items-start"><MapPin className="text-primary flex-shrink-0" size={20} />Shreeyash Hospital, 759/53, 1st Floor,<br />Fergusson College Road, Deccan Gymkhana, Pune 411004</p>
            <p className="flex gap-3 items-start"><Clock className="text-primary flex-shrink-0" size={20} />Monday to Sunday, 9:00 AM to 9:00 PM</p>
          </div>
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL && <iframe title="Clinic location map" src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL} className="w-full h-72 rounded-2xl border-0" loading="lazy" />}
        </div>
      </div>
    </main>
  )
}
