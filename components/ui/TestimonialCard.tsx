import { Star } from 'lucide-react'
import type { TestimonialItem } from '@/lib/data/testimonials'

interface TestimonialCardProps {
  testimonial: TestimonialItem
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? 'text-gold fill-gold' : 'text-neutral-200'}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      </div>

      <blockquote className="text-neutral-700 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-neutral-900">{testimonial.name}</p>
          <p className="text-xs text-neutral-500">{testimonial.location} • {testimonial.treatment}</p>
        </div>
      </div>
    </div>
  )
}
