import type { Metadata } from 'next'
import { ServicesGrid } from '@/components/sections/ServicesGrid'

export const metadata: Metadata = {
  title: 'Dental Services | World Class Dental Clinic, Pune',
  description: '16 specialist dental treatments available at World Class Dental Clinic, Pune.',
}

export default function ServicesPage() {
  return (
    <main className="pt-20"><ServicesGrid /></main>
  )
}
