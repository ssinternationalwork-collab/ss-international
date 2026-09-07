import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProductDetailPage from '@/components/products/ProductDetailPage';
import { getProductDetail, productDetails } from '@/data/product-details';

export function generateStaticParams() {
  return productDetails.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductDetail(slug);
  if (!product) return {};

  return {
    title: `${product.name} | SS International`,
    description: product.heroText,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductDetail(slug);
  if (!product) notFound();

  return (
    <>
      <Nav />
      <ProductDetailPage product={product} />
      <Footer />
    </>
  );
}
