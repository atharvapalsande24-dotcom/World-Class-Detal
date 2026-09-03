'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { faqs } from '@/lib/data/faqs'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { fadeUp } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'

export function FaqSection() {
  const previewFaqs = faqs.slice(0, 5)

  return (
    <section id="faq" className="py-20 bg-white" aria-labelledby="faq-section-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 id="faq-section-heading" className="text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Find answers to our most common patient questions below.
          </p>
        </div>

        <FaqAccordion items={previewFaqs} />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            View all questions
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 p-8 bg-primary/5 rounded-2xl border border-primary/15 text-center"
        >
          <p className="text-neutral-700 font-medium mb-4">
            Still have questions? Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
