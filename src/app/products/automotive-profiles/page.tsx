import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AutomotiveProfilesProduct from '@/components/products/AutomotiveProfilesProduct';

export const metadata: Metadata = {
  title: 'Automotive Rubber Profiles | SS International',
  description: 'Automotive rubber profiles for vehicle doors, body openings, glazing interfaces and closure systems, engineered around fit, retention and compression.',
};

export default function AutomotiveProfilesPage() {
  return (
    <>
      <Nav />
      <AutomotiveProfilesProduct />
      <Footer />
    </>
  );
}
