import type { Metadata } from 'next'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://worldclassdental.in'
  const fullTitle = `${title} | World Class Dental Clinic, Pune`
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(base),
    openGraph: {
      title: fullTitle,
      description,
      url: `${base}${path}`,
      siteName: 'World Class Dental Clinic',
      images: [
        {
          url: image ?? `${base}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'World Class Dental Clinic, Pune',
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image ?? `${base}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${base}${path}`,
    },
  }
}
