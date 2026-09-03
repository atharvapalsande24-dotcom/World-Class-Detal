'use client'

import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'introSeen'

/**
 * Manages the intro overlay visibility state using localStorage.
 * - shouldShow: true only on first visit (localStorage key absent)
 * - dismiss: sets the key and hides the overlay
 */
export function useIntroOverlay() {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    // Only runs client-side after hydration
    const seen = localStorage.getItem(STORAGE_KEY)
    setShouldShow(seen !== 'true')
  }, [])

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setShouldShow(false)
  }, [])

  return { shouldShow, dismiss }
}
