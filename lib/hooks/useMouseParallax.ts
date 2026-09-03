'use client'

import { useState, useCallback, useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

interface ParallaxValues {
  rx: number  // rotation around X axis, degrees, clamped to ±15
  ry: number  // rotation around Y axis, degrees, clamped to ±15
}

/**
 * Tracks mouse position relative to a container element and returns
 * rotation values (rx, ry) clamped to ±15 degrees for use as a
 * subtle parallax effect on the hero 3D scene.
 * Returns {rx: 0, ry: 0} when prefers-reduced-motion is active.
 */
export function useMouseParallax(
  containerRef: React.RefObject<HTMLElement>
): ParallaxValues {
  const [values, setValues] = useState<ParallaxValues>({ rx: 0, ry: 0 })
  const reducedMotion = useReducedMotion()

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reducedMotion || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Normalise to -1..1 range relative to container centre
      const normalX = (e.clientX - centerX) / (rect.width / 2)
      const normalY = (e.clientY - centerY) / (rect.height / 2)

      // Clamp to ±1 and scale to ±15 degrees
      const MAX_DEG = 15
      const rx = Math.max(-MAX_DEG, Math.min(MAX_DEG, normalY * MAX_DEG))
      const ry = Math.max(-MAX_DEG, Math.min(MAX_DEG, normalX * MAX_DEG))

      setValues({ rx, ry })
    },
    [reducedMotion, containerRef]
  )

  useEffect(() => {
    if (reducedMotion) {
      setValues({ rx: 0, ry: 0 })
      return
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion, handleMouseMove])

  return values
}
