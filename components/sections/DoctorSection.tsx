'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Star, ArrowRight } from 'lucide-react'
import { scaleIn, fadeUp, staggerContainer } from '@/lib/animations'

const qualifications = [
  { icon: GraduationCap, label: 'BDS — Bachelor of Dental Surgery' },
  { icon: GraduationCap, label: 'MDS — Master of Dental Surgery (Orthodontics)' },
  { icon: Award, label: 'Fellowship in Orthodontics' },
  { icon: Star, label: 'Multiple National Awards in Orthodontics' },
]

const specialisations = [
  'Metal & Ceramic Braces',
  'Invisalign / Clear Aligners',
  'Lingual Braces',
  'Functional Appliances',
  'Paediatric Orthodontics',
  'Jaw / TMJ Management',
]

export function DoctorSection() {
  return (
    <section id="doctor" className="py-20 bg-neutral-50" aria-labelledby="doctor-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content side — comes first on mobile */}
          <motion.div
            variants={staggerContainer(100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="order-2 lg:order-1"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Meet Our Specialist
            </motion.p>

            <motion.h2 variants={fadeUp} id="doctor-heading" className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2 leading-tight">
              Dr. Priyanka Saokar Navale
            </motion.h2>

            <motion.p variants={fadeUp} className="text-primary font-semibold mb-6">
              BDS, MDS (Orthodontics)
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-neutral-600 leading-relaxed mb-6">
              Dr. Priyanka Saokar Navale is a specialist orthodontist with extensive clinical experience in transforming smiles across all age groups. With postgraduate training in Orthodontics and Dentofacial Orthopaedics, she brings precision, empathy, and an aesthetic eye to every treatment.
            </motion.p>

            <motion.p variants={fadeUp} className="text-neutral-600 leading-relaxed mb-8">
              A recipient of multiple national and state-level awards for excellence in orthodontics, Dr. Navale is recognised as one of Pune&apos;s leading orthodontic specialists. Her patient-centred philosophy ensures that every smile transformation is tailored to the individual&apos;s facial aesthetics, lifestyle, and long-term oral health.
            </motion.p>

            {/* Qualifications */}
            <motion.ul variants={staggerContainer(80)} className="space-y-3 mb-8">
              {qualifications.map((qual, i) => {
                const Icon = qual.icon
                return (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 text-sm text-neutral-700">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-primary" aria-hidden="true" />
                    </div>
                    {qual.label}
                  </motion.li>
                )
              })}
            </motion.ul>

            {/* Specialisations */}
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-sm font-semibold text-neutral-800 mb-3 uppercase tracking-wide">Specialisations</p>
              <div className="flex flex-wrap gap-2">
                {specialisations.map((spec, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href="/doctor"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Full Profile
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-200">
              <Image
                src="/images/clinic/doctor-priyanka.png"
                alt="Dr. Priyanka Saokar Navale — BDS, MDS (Orthodontics), World Class Dental Clinic Pune"
                fill
                className="object-contain object-top bg-[#e2e8f0]"
                quality={100}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={event => { event.currentTarget.src = '/images/clinic/doctor-priyanka-alt.png' }}
              />
            </div>

            {/* Award badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Award size={20} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">65+ Awards</p>
                  <p className="text-xs text-neutral-500">National Recognition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
