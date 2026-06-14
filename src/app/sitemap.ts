import { MetadataRoute } from 'next'
import { weddings, intimateWeddings, couples } from '@/lib/galleries'
import { getAllPosts } from '@/lib/mdx'

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
      url: 'https://www.kusakinphoto.com/experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.kusakinphoto.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.kusakinphoto.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.kusakinphoto.com/journal',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.kusakinphoto.com/guides',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Wedding gallery URLs (weddings + intimate weddings/elopements both route to /wedding)
  const weddingUrls = [...weddings, ...intimateWeddings].map(wedding => ({
    url: `https://www.kusakinphoto.com/wedding/${wedding.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // // Family session URLs
  // const familyUrls = families.map(family => ({
  //   url: `https://www.kusakinphoto.com/family/${family.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  // Couples session URLs
  const couplesUrls = couples.map(couple => ({
    url: `https://www.kusakinphoto.com/couple/${couple.id}`,
    lastModified: new Date(),
    changeFrequency:'monthly' as const,
    priority: 0.7,
  }))

  // Journal post URLs
  const journalUrls = getAllPosts('blog').map(post => ({
    url: `https://www.kusakinphoto.com/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Guide URLs
  const guideUrls = getAllPosts('guides').map(post => ({
    url: `https://www.kusakinphoto.com/guides/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all URLs
  return [...baseUrls, ...weddingUrls, ...couplesUrls, ...journalUrls, ...guideUrls] as MetadataRoute.Sitemap
}
