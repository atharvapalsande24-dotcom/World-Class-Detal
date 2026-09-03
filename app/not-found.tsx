import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | World Class Dental Clinic, Pune',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
      <p className="text-2xl font-semibold text-neutral-900 mb-2">Page Not Found</p>
      <p className="text-neutral-800 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
        >
          Book Appointment
        </Link>
      </div>
    </main>
  )
}
