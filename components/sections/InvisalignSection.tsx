'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp, fadeIn } from '@/lib/animations'

const benefits = [
  'Virtually invisible — no brackets or wires',
  'Removable for eating, drinking, and oral hygiene',
  'No dietary restrictions during treatment',
  'Comfortable smooth plastic aligners',
  'Preview your final smile digitally before you start',
  'Fewer clinic visits than traditional braces',
]

const steps = [
  {
    step: 1,
    title: 'Digital Consultation',
    description: 'We take a precise 3D digital scan of your teeth — no messy impressions.',
  },
  {
    step: 2,
    title: 'Custom Aligner Fabrication',
    description: 'Your unique series of clear aligners is manufactured to millimetre precision.',
  },
  {
    step: 3,
    title: 'Wear & Progress',
    description: 'Change aligners every 1–2 weeks as your teeth gradually shift into position.',
  },
  {
    step: 4,
    title: 'Reveal Your Smile',
    description: 'Complete treatment wearing retainers to preserve your perfect new smile.',
  },
]

export function InvisalignSection() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
      aria-labelledby="invisalign-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — content */}
          <div>
            <motion.div
              variants={staggerContainer(100)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.p variants={fadeUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Clear Aligners
              </motion.p>
              <motion.h2 variants={fadeUp} id="invisalign-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                A More Confident Way to Straighten Your Smile
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Invisalign and clear aligners offer a modern, virtually invisible path to straighter teeth — no brackets, no wires, no compromise.
              </motion.p>

              <motion.ul variants={staggerContainer(60)} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {benefits.map((benefit, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {benefit}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Get a Free Consultation
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column — process steps */}
          <motion.div
            variants={staggerContainer(120)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
