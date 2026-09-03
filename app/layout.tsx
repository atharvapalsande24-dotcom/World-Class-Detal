import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SiteShell } from '@/components/layout/SiteShell'

export const metadata: Metadata = {
  title: 'World Class Dental Clinic, Pune',
  description: 'Premium orthodontic & dental care in Pune led by Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics).',
  metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://world-class-dental.vercel.app'
),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
