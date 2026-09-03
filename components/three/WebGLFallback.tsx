import Image from 'next/image'

interface WebGLFallbackProps {
  className?: string
  variant?: 'hero' | 'intro'
}

/**
 * Static fallback shown when WebGL is unavailable or the 3D scene
 * fails to render. Uses the inline SVG tooth illustration.
 */
export function WebGLFallback({ className = '', variant = 'hero' }: WebGLFallbackProps) {
  if (variant === 'intro') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <Image
          src="/fallbacks/tooth-fallback.svg"
          alt="World Class Dental Clinic tooth illustration"
          width={200}
          height={200}
          className="opacity-80 drop-shadow-lg"
          priority
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <Image
          src="/fallbacks/tooth-fallback.svg"
          alt="Premium dental care illustration"
          fill
          className="object-contain opacity-70"
          priority
        />
      </div>
    </div>
  )
}
