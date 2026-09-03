'use client'

import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/data/gallery'

interface LightboxProps {
  item: GalleryItem
  side: 'before' | 'after'
  total: number
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({ item, side, total, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus trap
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowRight') { onNext(); return }
      if (e.key === 'ArrowLeft') { onPrev(); return }

      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose, onNext, onPrev])

  const src = side === 'before' ? item.beforeSrc : item.afterSrc
  const alt = side === 'before' ? item.beforeAlt : item.afterAlt

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      aria-label="Gallery lightbox"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.treatment} — ${side} treatment photo`}
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Caption */}
        <div className="flex items-center justify-between mt-3 text-white">
          <p className="text-sm font-medium">
            <span className="capitalize text-primary">{side}</span> — {item.treatment}
          </p>
          <p className="text-xs text-neutral-400">{currentIndex + 1} / {total}</p>
        </div>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
          <button
            onClick={onPrev}
            aria-label="Previous image"
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNext}
            aria-label="Next image"
            className="pointer-events-auto p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
