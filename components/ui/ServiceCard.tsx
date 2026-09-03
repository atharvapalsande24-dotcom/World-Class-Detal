'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'
import type { ServiceItem } from '@/lib/data/services'

interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>>)[service.icon]

  return (
    <motion.div whileHover={{ y: -10, rotate: 0.35, scale: 1.02 }} transition={{ type: 'spring', stiffness: 280, damping: 18 }}>
    <Link
      href={`/services/${service.slug}`}
      className="service-card group flex h-full flex-col rounded-2xl border border-white/80 bg-white/90 p-6 shadow-[0_10px_30px_rgba(23,43,58,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-[0_22px_42px_rgba(224,91,67,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Learn more about ${service.name}`}
    >
      <div className="service-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
        {IconComponent && (
          <IconComponent size={24} className="text-primary transition-colors group-hover:text-white" aria-hidden={true} />
        )}
      </div>
      <h3 className="mb-2 font-semibold text-neutral-900">{service.name}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">{service.shortDescription}</p>
      <div className="flex items-center text-sm font-semibold text-primary">
        <span>Learn More</span>
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </div>
    </Link>
    </motion.div>
  )
}
