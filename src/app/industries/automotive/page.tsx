import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AutomotiveIndustry from '@/components/industries/AutomotiveIndustry';

export const metadata: Metadata = {
  title: 'Automotive Rubber Profiles | SS International Industries LLP',
  description: 'Automotive rubber sealing profiles for vehicle doors, glazing systems, body interfaces, edge protection, co-extrusion and moulded sealing assemblies.',
};

export default function AutomotiveIndustryPage() {
  return (
    <>
      <Nav />
      <AutomotiveIndustry />
      <Footer />
    </>
  );
}
