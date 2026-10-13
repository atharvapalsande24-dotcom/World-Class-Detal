import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { getSiteUrl } from '@/lib/metadata'

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/doctor', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/news-update', priority: 0.5, changeFrequency: 'monthly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  return [
    ...staticRoutes.map(route => ({
      url: new URL(route.path, `${siteUrl}/`).toString(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map(service => ({
      url: new URL(`/services/${service.slug}`, `${siteUrl}/`).toString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
