import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProductsOverview from '@/components/products/ProductsOverview';

export const metadata: Metadata = {
  title: 'Rubber Profiles & Sealing Products | SS International',
  description: 'Explore 17 SS International product families for automotive, railways, architecture, shipping, power distribution and infrastructure applications.',
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <ProductsOverview />
      <Footer />
    </>
  );
}
