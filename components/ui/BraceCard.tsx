'use client'

import Link from 'next/link'
import { CheckCircle, XCircle } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { BraceItem } from '@/lib/data/braces'

interface BraceCardProps {
  brace: BraceItem
  isSelected?: boolean
  onSelect?: () => void
}

export function BraceCard({ brace, isSelected, onSelect }: BraceCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>>)[brace.iconName]

  return (
    <div
      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
          : 'border-neutral-200 bg-white hover:border-primary/50 hover:shadow-md'
      }`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect?.()}
      aria-pressed={isSelected}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={20} className="text-primary" aria-hidden={true} />}
        </div>
        <h3 className="font-bold text-neutral-900">{brace.name}</h3>
      </div>

      <p className="text-sm text-neutral-600 mb-4">{brace.description}</p>

      {isSelected && (
        <>
          <div className="mb-3">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Pros</p>
            <ul className="space-y-1">
              {brace.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                  <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Cons</p>
            <ul className="space-y-1">
              {brace.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                  <XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Cost range:</span>
            <span className="font-semibold text-primary">{brace.costRange}</span>
          </div>
          <Link
            href={`/services/${brace.slug}`}
            className="mt-4 block text-center py-2 px-4 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More
          </Link>
        </>
      )}

      {!isSelected && (
        <p className="text-xs text-primary font-medium">Click to compare →</p>
      )}
    </div>
  )
}
