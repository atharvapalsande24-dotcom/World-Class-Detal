'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { whyChooseUs } from '@/lib/data/whyChooseUs'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-neutral-50" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Us</p>
          <h2 id="why-heading" className="text-4xl font-bold text-neutral-900 mb-4">
            Why Patients Choose World Class Dental
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From our specialist team to our technology and patient-centred approach, here&apos;s what sets us apart.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(60)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {whyChooseUs.map((item) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>>)[item.iconName]
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="flex flex-col p-6 bg-white rounded-2xl border border-neutral-200 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent size={22} className="text-primary" aria-hidden={true} />}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
