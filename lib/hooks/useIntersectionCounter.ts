'use client'

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

interface CounterOptions {
  target: number       // Final value to count to
  duration?: number    // Animation duration in ms (default 2000)
  start?: number       // Starting value (default 0)
}

/**
 * Returns the current animated count value.
 * - Fires once when the returned `ref` element enters the viewport.
 * - With prefers-reduced-motion, immediately returns the final value.
 * - The second return value is the ref to attach to the counter element.
 */
export function useIntersectionCounter(
  options: CounterOptions
): [number, React.RefObject<HTMLElement>] {
  const { target, duration = 2000, start = 0 } = options
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(reducedMotion ? target : start)
  const ref = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (reducedMotion) {
      setCount(target)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.disconnect()

          const startTime = performance.now()
          const range = target - start

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(start + range * eased))

            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration, start, reducedMotion])

  return [count, ref]
}
