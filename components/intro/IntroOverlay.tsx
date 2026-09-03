'use client'

import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntroOverlay } from '@/lib/hooks/useIntroOverlay'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { Sparkles } from 'lucide-react'

const IntroToothModel = dynamic(
  () => import('@/components/three/IntroToothModel').then(m => ({ default: m.IntroToothModel })),
  {
    ssr: false,
    loading: () => <LoadingSpinner size={64} />,
  }
)

// Floating particle component
function Particle({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

const particles = [
  { x: 10, y: 20, delay: 0 },
  { x: 85, y: 15, delay: 0.5 },
  { x: 20, y: 75, delay: 1.2 },
  { x: 75, y: 80, delay: 0.8 },
  { x: 50, y: 10, delay: 1.5 },
  { x: 30, y: 50, delay: 0.3 },
  { x: 70, y: 40, delay: 1 },
  { x: 90, y: 60, delay: 0.6 },
]

export function IntroOverlay() {
  const { shouldShow, dismiss } = useIntroOverlay()
  const reducedMotion = useReducedMotion()

  const exitDuration = reducedMotion ? 0.4 : 0.8

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.05 }}
          transition={{ duration: exitDuration, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0F9FF 100%)',
          }}
          aria-modal="true"
          role="dialog"
          aria-label="Welcome to World Class Dental Clinic"
        >
          {/* Background gradient rings */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
              style={{ animation: reducedMotion ? 'none' : undefined }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/20" />
          </div>

          {/* Particles */}
          {!reducedMotion && particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-2xl">
            {/* 3D model / fallback */}
            <motion.div
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mb-8"
            >
              <IntroToothModel />
            </motion.div>

            {/* Clinic badge */}
            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            >
              <Sparkles size={14} className="text-primary" aria-hidden="true" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Pune, Maharashtra</span>
            </motion.div>

            {/* Clinic name */}
            <motion.h1
              initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-3"
            >
              <span className="block">World Class</span>
              <span className="block text-primary">Dental Clinic</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-neutral-600 mb-2"
            >
              Crafting Confident Smiles
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-sm text-neutral-500 mb-10"
            >
              Dr. Priyanka Saokar Navale — BDS, MDS (Orthodontics)
            </motion.p>

            {/* Loading progress bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              className="w-48 h-0.5 bg-primary/20 rounded-full mb-8 origin-left"
              style={{ position: 'relative' }}
            >
              <div className="absolute inset-0 bg-primary rounded-full" />
            </motion.div>

            {/* Enter button */}
            <motion.button
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={reducedMotion ? {} : { scale: 1.04 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              onClick={dismiss}
              className="px-10 py-4 bg-primary text-white font-semibold rounded-2xl text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Enter Website
            </motion.button>
          </div>

          {/* Bottom subtle branding */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute bottom-6 text-xs text-neutral-400"
          >
            Awarded Pune&apos;s Best Dentist
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
