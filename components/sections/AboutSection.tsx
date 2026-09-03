'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { fadeUp, slideInLeft, staggerContainer } from '@/lib/animations'

const highlights = [
  'Specialist orthodontic team led by Dr. Priyanka Saokar Navale',
  'State-of-the-art dental technology and digital imaging',
  'Strict sterilisation and infection-control protocols',
  'Comfortable, modern, anxiety-free treatment environment',
  'Multiple dental specialties under one roof',
  'Centrally located in Pune with easy accessibility',
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-100">
              <Image
                src="/images/clinic/clinic-world-class-dental.jpeg"
                alt="World Class Dental Clinic reception and treatment area in Pune"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={event => { event.currentTarget.src = '/images/clinic/clinic-image.jpg' }}
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs text-primary font-bold">
                          {i === 1 ? 'P' : i === 2 ? 'R' : 'A'}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">10,000+ Patients</p>
                      <p className="text-xs text-neutral-500">Trust World Class Dental</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-primary rounded-2xl p-4 text-white shadow-lg shadow-primary/30">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs opacity-90">Years of<br />Excellence</p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={staggerContainer(100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Us
            </motion.p>

            <motion.h2 variants={fadeUp} id="about-heading" className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              World Class Dental Clinic, Pune
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-neutral-600 leading-relaxed mb-6">
              At World Class Dental Clinic, we believe that exceptional dental care goes far beyond treating teeth — it&apos;s about transforming confidence and improving lives. Located in the heart of Pune at Fergusson College Road, Deccan Gymkhana, our clinic combines the warmth of personalised care with the precision of cutting-edge dental technology.
            </motion.p>

            <motion.p variants={fadeUp} className="text-neutral-600 leading-relaxed mb-8">
              Led by Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics), our specialist team is dedicated to delivering the highest standard of orthodontic and dental care in a comfortable, stress-free environment. We offer a comprehensive range of treatments from braces and clear aligners to dental implants, smile makeovers, and paediatric dentistry.
            </motion.p>

            <motion.ul variants={staggerContainer(60)} className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-neutral-700">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore Our Clinic
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
