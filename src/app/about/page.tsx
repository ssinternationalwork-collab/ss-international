import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTimelineC from "@/components/about/AboutTimelineC";
import AboutFounder from "@/components/AboutFounder";
import HomeCTAv2 from '@/components/HomeCTAv2';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHero />
      <AboutStory />
      <AboutFounder />
      <AboutTimelineC />
      <HomeCTAv2 />
      <Footer />
    </>
  );
}
