'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/data/services'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'

export function ServicesGrid() {
  return (
    <section id="services" className="services-section py-20" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services-heading text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Treatments</p>
          <h2 id="services-heading" className="text-4xl font-bold text-neutral-900 mb-4">
            Complete Dental Care Under One Roof
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From orthodontics to cosmetic dentistry, our specialist team covers every aspect of your oral health.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(50)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map(service => (
            <motion.div key={service.id} variants={fadeUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View All Services
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
