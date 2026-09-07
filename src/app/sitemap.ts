import type { MetadataRoute } from 'next';
import { industries } from '@/data/industries';
import { products } from '@/data/products';

const baseUrl = 'https://ssinternationalpolymers.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/company-profile',
    '/customer-registration',
    '/industries',
    '/products',
    '/quality-assurance',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/industries' || route === '/products' ? 0.9 : 0.7,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...industryEntries, ...productEntries];
}
