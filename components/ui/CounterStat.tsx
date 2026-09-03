'use client'

import { useIntersectionCounter } from '@/lib/hooks/useIntersectionCounter'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface CounterStatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export function CounterStat({ value, suffix = '', prefix = '', label, duration = 2000 }: CounterStatProps) {
  const reducedMotion = useReducedMotion()
  const [count, ref] = useIntersectionCounter({ target: value, duration })

  return (
    <div className="text-center">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="text-4xl md:text-5xl font-bold font-display text-primary"
        aria-live="polite"
      >
        {prefix}{reducedMotion ? value : count}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-neutral-800 uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}
