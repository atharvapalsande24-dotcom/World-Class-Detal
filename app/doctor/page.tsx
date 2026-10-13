import { DoctorSection } from '@/components/sections/DoctorSection'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Dr. Priyanka Saokar Navale',
  description: 'BDS, MDS Orthodontics specialist profile — Dr. Priyanka Saokar Navale at World Class Dental Clinic, Pune.',
  path: '/doctor',
})

export default function DoctorPage() {
  return (
    <main className="pt-20"><DoctorSection /></main>
  )
}
