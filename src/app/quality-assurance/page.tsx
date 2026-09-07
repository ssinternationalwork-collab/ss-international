import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import QualityAssurancePage from '@/components/quality/QualityAssurancePage';

export const metadata: Metadata = {
  title: 'Quality Assurance | SS International',
  description: 'Quality assurance at SS International: requirement review, process control, profile inspection, documentation and repeat-production consistency for engineered rubber profiles.',
};

export default function QualityAssuranceRoute() {
  return (
    <>
      <Nav />
      <QualityAssurancePage />
      <Footer />
    </>
  );
}
