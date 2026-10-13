import { AboutSection } from '@/components/sections/AboutSection'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'About Our Dental Clinic',
  description: 'Learn about World Class Dental Clinic\'s history, values, and state-of-the-art facilities in Pune.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <main className="pt-20"><AboutSection /></main>
  )
}
