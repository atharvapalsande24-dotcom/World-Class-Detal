'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Check, MapPin, Phone, Sparkles } from 'lucide-react'
import { useMouseParallax } from '@/lib/hooks/useMouseParallax'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { ThreeErrorBoundary } from '@/components/three/ThreeErrorBoundary'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const HeroCanvas = dynamic(
  () => import('@/components/three/HeroCanvas').then(m => ({ default: m.HeroCanvas })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner size={48} />
      </div>
    ),
  }
)

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { rx, ry } = useMouseParallax(containerRef)
  const reducedMotion = useReducedMotion()

  return (
    <section
      ref={containerRef}
      id="hero"
      className="hero-shell relative min-h-screen overflow-hidden pt-24 lg:pt-28"
      aria-label="Hero section"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <div className="max-w-2xl">
          <motion.div
            custom={0}
            variants={textVariants}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            className="eyebrow mb-6"
          >
            <Sparkles size={14} aria-hidden="true" />
            Pune&apos;s orthodontic specialists
          </motion.div>

          {/* Main headline */}
          <motion.h1
            custom={0.15}
            variants={textVariants}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            className="hero-title mb-6"
          >
            Your Smile.
            <span className="hero-title-accent">Our expertise.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={0.30}
            variants={textVariants}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            className="hero-copy mb-8 max-w-xl"
          >
            Advanced orthodontic and dental care designed around you, led by Dr. Priyanka Saokar Navale, BDS, MDS (Orthodontics).
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.45}
            variants={textVariants}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="hero-button hero-button-primary"
            >
              Book an Appointment
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href="tel:+919503008228"
              className="hero-button hero-button-secondary"
              aria-label="Call us at +91 9503008228"
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            custom={0.60}
            variants={textVariants}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-5"
          >
            {[
              { value: '5/5', label: 'Google Rating' },
              { value: '650+', label: 'Reviews' },
              { value: '9–9', label: 'Open daily' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold tracking-tight text-[#123a4a]">{stat.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual"
          >
            <div className="hero-visual-canvas" aria-hidden="true">
              <ThreeErrorBoundary>
                <HeroCanvas rx={reducedMotion ? 0 : rx} ry={reducedMotion ? 0 : ry} />
              </ThreeErrorBoundary>
            </div>
            <div className="hero-image hero-image-main">
              <Image src="/images/clinic/hero-braces.jpg" alt="Orthodontic braces treatment at World Class Dental Clinic" fill priority sizes="(max-width: 1024px) 58vw, 34vw" className="object-cover" />
            </div>
            <div className="hero-image hero-image-small">
              <Image src="/images/clinic/hero-aligners.jpg" alt="Clear aligner treatment consultation" fill sizes="180px" className="object-cover" />
            </div>
            <div className="hero-note hero-note-top">
              <span className="hero-note-icon"><Check size={15} /></span>
              <span><strong>Care that feels personal</strong><small>Hygiene-first, comfortable visits</small></span>
            </div>
            <div className="hero-note hero-note-bottom">
              <MapPin size={16} aria-hidden="true" />
              <span>Deccan Gymkhana, Pune</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">Scroll to explore <span>↓</span></div>
    </section>
  )
}
