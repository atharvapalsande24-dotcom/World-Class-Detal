'use client'

import { useReducer, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryItems } from '@/lib/data/gallery'
import { Lightbox } from './Lightbox'
import { fadeIn } from '@/lib/animations'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

type LightboxAction =
  | { type: 'OPEN'; index: number; side: 'before' | 'after' }
  | { type: 'CLOSE' }
  | { type: 'NEXT' }
  | { type: 'PREV' }

interface LightboxState {
  isOpen: boolean
  currentIndex: number
  viewingSide: 'before' | 'after'
}

function lightboxReducer(state: LightboxState, action: LightboxAction): LightboxState {
  const total = galleryItems.length
  switch (action.type) {
    case 'OPEN':
      return { isOpen: true, currentIndex: action.index, viewingSide: action.side }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'NEXT':
      return { ...state, currentIndex: (state.currentIndex + 1) % total }
    case 'PREV':
      return { ...state, currentIndex: (state.currentIndex - 1 + total) % total }
    default:
      return state
  }
}

export function GalleryGrid() {
  const [isPaused, setIsPaused] = useState(false)
  const [lbState, dispatch] = useReducer(lightboxReducer, {
    isOpen: false,
    currentIndex: 0,
    viewingSide: 'after',
  })
  const reducedMotion = useReducedMotion()
  const displayItems = [...galleryItems, ...galleryItems]

  return (
    <>
      <div
        className="gallery-marquee-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="gallery-marquee-track"
          style={{
            animation: 'photoMarquee 42s linear infinite',
            animationPlayState: (isPaused || reducedMotion) ? 'paused' : 'running',
          }}
        >
          {displayItems.map((item, displayIndex) => {
            const index = displayIndex % galleryItems.length
            return (
              <motion.div key={`${item.id}-${displayIndex}`} variants={fadeIn} className="gallery-marquee-card group">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {item.treatment}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {(['before', 'after'] as const).map(side => (
                    <button
                      key={side}
                      onClick={() => dispatch({ type: 'OPEN', index, side })}
                      className="relative aspect-square overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`View treatment reference ${side === 'before' ? '1' : '2'} for ${item.treatment}`}
                    >
                      <Image
                        src={side === 'before' ? item.beforeSrc : item.afterSrc}
                        alt={side === 'before' ? item.beforeAlt : item.afterAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 640px) 42vw, 250px"
                        onError={event => { event.currentTarget.src = '/fallbacks/tooth-fallback.svg' }}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/40 py-1 text-center text-xs font-medium text-white">
                        Reference {side === 'before' ? '1' : '2'}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {lbState.isOpen && (
        <Lightbox
          item={galleryItems[lbState.currentIndex]}
          side={lbState.viewingSide}
          total={galleryItems.length}
          currentIndex={lbState.currentIndex}
          onClose={() => dispatch({ type: 'CLOSE' })}
          onNext={() => dispatch({ type: 'NEXT' })}
          onPrev={() => dispatch({ type: 'PREV' })}
        />
      )}
    </>
  )
}
