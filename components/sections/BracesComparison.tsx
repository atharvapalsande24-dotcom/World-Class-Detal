'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { braces } from '@/lib/data/braces'
import { BraceCard } from '@/components/ui/BraceCard'
import { staggerContainer, slideInLeft } from '@/lib/animations'
import { Calendar } from 'lucide-react'

export function BracesComparison() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="braces" className="py-20 bg-white" aria-labelledby="braces-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Orthodontics</p>
          <h2 id="braces-heading" className="text-4xl font-bold text-neutral-900 mb-4">
            Find the Right Braces for Your Smile
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Compare our brace options and select the one that fits your lifestyle, goals, and budget.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(80)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {braces.map((brace, index) => (
            <motion.div key={brace.id} variants={slideInLeft}>
              <BraceCard
                brace={brace}
                isSelected={selectedIndex === index}
                onSelect={() => setSelectedIndex(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Calendar size={18} aria-hidden="true" />
            Book Braces Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
