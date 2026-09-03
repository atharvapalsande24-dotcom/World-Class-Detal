'use client'

import Image from 'next/image'
import { Award, ArrowUpRight } from 'lucide-react'
import { awards } from '@/lib/data/awards'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

const photoSources = [
  { src: '/images/clinic/hero-braces.jpg', alt: 'Braces treatment at World Class Dental Clinic' },
  { src: '/images/clinic/hero-aligners.jpg', alt: 'Clear aligner treatment' },
  { src: '/images/clinic/hero-whitening.jpg', alt: 'Teeth whitening treatment' },
  { src: '/images/clinic/hero-smile-design.jpg', alt: 'Smile designing treatment' },
  { src: '/images/clinic/hero-implants.jpg', alt: 'Dental implants treatment' },
  { src: '/images/clinic/hero-adult.jpg', alt: 'Adult orthodontics treatment' },
]

export function HomeVisualStrips() {
  const reducedMotion = useReducedMotion()
  const photos = [...photoSources, ...photoSources]
  const recognition = [...awards, ...awards]

  return (
    <section className="home-strips" aria-label="Clinic treatments and recognition">
      <div className="home-strip-heading">
        <span>Inside World Class Dental</span>
        <span className="home-strip-line" aria-hidden="true" />
        <span>Care, precision, confidence</span>
      </div>

      <div className="home-photo-viewport" aria-label="Treatment photography">
        <div
          className="home-photo-track"
          style={{
            animation: 'photoMarquee 38s linear infinite',
            animationPlayState: reducedMotion ? 'paused' : 'running',
          }}
        >
          {photos.map((photo, index) => (
            <div className="home-photo-card" key={`${photo.src}-${index}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes="220px" className="object-cover" />
              <span>{photo.alt.replace(' at World Class Dental Clinic', '')}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="home-awards-viewport" aria-label="Awards and recognition">
        <div
          className="home-awards-track"
          style={{
            animation: 'homeAwardsMarquee 34s linear infinite',
            animationPlayState: reducedMotion ? 'paused' : 'running',
          }}
        >
          {recognition.map((award, index) => (
            <div className="home-award-card" key={`${award.id}-${index}`}>
              <Award size={17} aria-hidden="true" />
              <span>{award.title}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
