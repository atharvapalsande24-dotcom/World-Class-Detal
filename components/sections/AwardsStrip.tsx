'use client'

import { useState } from 'react'
import { Award } from 'lucide-react'
import { awards } from '@/lib/data/awards'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export function AwardsStrip() {
  const [isPaused, setIsPaused] = useState(false)
  const reducedMotion = useReducedMotion()

  // Duplicate awards for seamless loop
  const displayAwards = [...awards, ...awards]

  return (
    <section className="py-12 bg-white overflow-hidden border-y border-neutral-100" aria-label="Awards and recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          Awards &amp; Recognition
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6"
          style={{
            animationPlayState: (isPaused || reducedMotion) ? 'paused' : 'running',
            animation: 'marquee 35s linear infinite',
          }}
        >
          {displayAwards.map((award, index) => (
            <div
              key={`${award.id}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-xl border border-neutral-200 min-w-max"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Award size={16} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{award.title}</p>
                {award.description && (
                  <p className="text-xs text-neutral-500 mt-0.5 max-w-xs">{award.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
