import type { Metadata } from 'next'
import { GalleryGrid } from '@/components/ui/GalleryGrid'

export const metadata: Metadata = {
  title: 'Patient Gallery | World Class Dental Clinic, Pune',
  description: 'Before & after treatment results at World Class Dental Clinic, Pune.',
}

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">Patient Gallery</h1>
      <p className="text-lg text-neutral-600 mb-10">A selection of treatment journeys from our clinic.</p>
      <GalleryGrid />
    </main>
  )
}
