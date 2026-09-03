import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { faqs } from '@/lib/data/faqs'

export const metadata: Metadata = {
  title: 'FAQs | World Class Dental Clinic, Pune',
  description: 'Answers to common dental & orthodontic questions at World Class Dental Clinic, Pune.',
}

export default function FaqPage() {
  return (
    <main className="pt-32 pb-20 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-neutral-600 mb-10">Answers to common questions about our dental and orthodontic care.</p>
      <FaqAccordion items={faqs} />
    </main>
  )
}
