import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import IndustriesOverview from '@/components/industries/IndustriesOverview';

export const metadata: Metadata = {
  title: 'Industries | SS International Industries LLP',
  description: 'Explore rubber sealing applications across automotive, roadways, architecture, railways, shipping, power distribution, mining and infrastructure.',
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <IndustriesOverview />
      <Footer />
    </>
  );
}
