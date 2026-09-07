'use client';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import BrandStatementV2 from '@/components/BrandStatementV2';
import IndustriesSection from '@/components/IndustriesSection';
import TechnologiesCarousel from '@/components/TechnologiesCarousel';
import ProductsPreview from '@/components/ProductsPreview';
import GlobalReach from '@/components/GlobalReach';
import QualityStrip from '@/components/QualityStrip';
import FAQSection from '@/components/FAQSection';
import HomeCTAv2 from '@/components/HomeCTAv2';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      <HeroSection />

      <BrandStatementV2 />

      <IndustriesSection />
      <ProductsPreview />
      <TechnologiesCarousel />
      <QualityStrip />
      <GlobalReach />
      <FAQSection />
      <HomeCTAv2 />
      <Footer />
    </>
  );
}
