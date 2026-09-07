import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import IndustryDetailPage from '@/components/industries/IndustryDetailPage';
import { getIndustryDetail, industryDetails } from '@/data/industry-details';

export function generateStaticParams() {
  return industryDetails.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryDetail(slug);
  if (!industry) return {};

  return {
    title: `${industry.eyebrow} Rubber Sealing Profiles | SS International`,
    description: industry.heroText,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryDetail(slug);
  if (!industry) notFound();

  return (
    <>
      <Nav />
      <IndustryDetailPage industry={industry} />
      <Footer />
    </>
  );
}
