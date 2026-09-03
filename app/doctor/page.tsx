import type { Metadata } from 'next'
import { DoctorSection } from '@/components/sections/DoctorSection'

export const metadata: Metadata = {
  title: 'Dr. Priyanka Saokar Navale | World Class Dental Clinic, Pune',
  description: 'BDS, MDS Orthodontics specialist profile — Dr. Priyanka Saokar Navale at World Class Dental Clinic, Pune.',
}

export default function DoctorPage() {
  return (
    <main className="pt-20"><DoctorSection /></main>
  )
}
