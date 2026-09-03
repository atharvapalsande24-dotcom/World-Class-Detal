'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

const PHONE_NUMBER = '+919503008228'
const WHATSAPP_NUMBER = '919503008228'

export function MobileActionBar() {
  const [isHidden, setIsHidden] = useState(false)
  const footerRef = useRef<Element | null>(null)

  useEffect(() => {
    footerRef.current = document.querySelector('footer')
    if (!footerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsHidden(entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3 bg-white border-t border-neutral-200 shadow-lg">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center gap-1 py-3 text-neutral-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
          aria-label="Call World Class Dental Clinic"
        >
          <Phone size={20} aria-hidden="true" />
          <span className="text-xs font-medium">Call</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20World%20Class%20Dental%20Clinic.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-neutral-700 hover:text-green-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-500"
          aria-label="WhatsApp World Class Dental Clinic"
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 py-3 bg-primary text-white hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          aria-label="Book an appointment"
        >
          <Calendar size={20} aria-hidden="true" />
          <span className="text-xs font-medium">Book</span>
        </Link>
      </div>
    </div>
  )
}
