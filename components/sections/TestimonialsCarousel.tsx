'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  const total = testimonials.length

  const goNext = useCallback(() => setActiveIndex(i => (i + 1) % total), [total])
  const goPrev = useCallback(() => setActiveIndex(i => (i - 1 + total) % total), [total])

  useEffect(() => {
    if (isPaused || reducedMotion) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [isPaused, reducedMotion, goNext])

  return (
    <section className="py-20 bg-neutral-50" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Patient Stories</p>
          <h2 id="testimonials-heading" className="text-4xl font-bold text-neutral-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-neutral-600">Real experiences from patients who trusted us with their smiles.</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={reducedMotion ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-neutral-200 bg-white hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    i === activeIndex ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-neutral-200 bg-white hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
