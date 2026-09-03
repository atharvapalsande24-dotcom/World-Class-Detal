import type { Metadata } from 'next'
import { AboutSection } from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About Us | World Class Dental Clinic, Pune',
  description: 'Learn about World Class Dental Clinic\'s history, values, and state-of-the-art facilities in Pune.',
}

export default function AboutPage() {
  return (
    <main className="pt-20"><AboutSection /></main>
  )
}
