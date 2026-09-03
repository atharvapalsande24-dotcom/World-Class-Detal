'use client'

import React from 'react'
import { WebGLFallback } from './WebGLFallback'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Class-based error boundary that catches R3F render errors
 * and renders the WebGL fallback component.
 */
export class ThreeErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.warn('Three.js render error caught by boundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return <WebGLFallback />
    }
    return this.props.children
  }
}

/**
 * Checks at runtime if WebGL is available in the browser.
 */
export function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}
