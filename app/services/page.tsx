import type { Metadata } from 'next'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Dental Services in Pune',
  description: '16 specialist dental treatments available at World Class Dental Clinic, Pune.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <main className="pt-20"><ServicesGrid /></main>
  )
}
