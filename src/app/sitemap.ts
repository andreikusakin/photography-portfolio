import { MetadataRoute } from 'next'
import { weddings, families, couples } from '@/lib/data' 

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URLs
  const baseUrls = [
    {
      url: 'https://www.kusakinphoto.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.kusakinphoto.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.kusakinphoto.com/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.kusakinphoto.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Wedding gallery URLs
  const weddingUrls = weddings.map(wedding => ({
    url: `https://www.kusakinphoto.com/weddings/${wedding.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Family session URLs
  const familyUrls = families.map(family => ({
    url: `https://www.kusakinphoto.com/family/${family.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Couples session URLs
  const couplesUrls = couples.map(couple => ({
    url: `https://www.kusakinphoto.com/couples/${couple.id}`,
    lastModified: new Date(),
    changeFrequency:'monthly' as const,
    priority: 0.7,
  }))

  // Combine all URLs
  return [...baseUrls, ...weddingUrls, ...familyUrls, ...couplesUrls] as MetadataRoute.Sitemap
}
