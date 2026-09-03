'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/data/faqs'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reducedMotion = useReducedMotion()
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const toggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (index + 1) % items.length
      buttonRefs.current[next]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (index - 1 + items.length) % items.length
      buttonRefs.current[prev]?.focus()
    }
  }

  return (
    <div className="space-y-3" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <div key={item.id} className="border border-neutral-200 rounded-xl overflow-hidden" role="listitem">
            <button
              id={buttonId}
              ref={el => { buttonRefs.current[index] = el }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="font-semibold text-neutral-900 pr-4">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
                className="flex-shrink-0 text-primary"
              >
                <ChevronDown size={20} aria-hidden="true" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-neutral-50 text-neutral-700 leading-relaxed border-t border-neutral-200">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
