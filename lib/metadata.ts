import type { Metadata } from 'next'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!envUrl) {
    return 'https://worldclassdental.in'
  }
  const siteUrl = envUrl.startsWith('http://') || envUrl.startsWith('https://')
    ? envUrl
    : `https://${envUrl}`
  return siteUrl.replace(/\/+$/, '')
}

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const base = getSiteUrl()
  const fullTitle = `${title} | World Class Dental Clinic, Pune`
  const imageUrl = image ? new URL(image, `${base}/`).toString() : undefined
  
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(base),
    openGraph: {
      title: fullTitle,
      description,
      url: new URL(path, `${base}/`).toString(),
      siteName: 'World Class Dental Clinic',
      ...(imageUrl && { images: [{ url: imageUrl, alt: 'World Class Dental Clinic, Pune' }] }),
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
    alternates: {
      canonical: new URL(path, `${base}/`).toString(),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}