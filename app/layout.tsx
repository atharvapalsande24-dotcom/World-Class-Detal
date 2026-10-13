import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SiteShell } from '@/components/layout/SiteShell'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Dentist & Orthodontist in Pune',
  description: 'Expert dental and orthodontic care in Pune, including braces, Invisalign, implants, and smile makeovers. Book a consultation with Dr. Priyanka Saokar Navale.',
  path: '/',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
