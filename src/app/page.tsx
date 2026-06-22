import Header from "@/components/header";
import Hero from "@/components/hero";
import AudienceSelector from "@/components/audience-selector";
import PopularPackages from "@/components/popular-packages";
import About from "@/components/about";
import ProgramsOverview from "@/components/programs-overview";

import WhyUs from "@/components/why-us";
import SocialProof from "@/components/social-proof";
import CakraPointsPromo from "@/components/cakrapoints-promo";
import CakraPoints from "@/components/cakrapoints";
import ProcessSection from "@/components/process-section";
import Faq from "@/components/faq";
import CtaConsult from "@/components/cta-consult";
import Footer from "@/components/footer";
import WaFloating from "@/components/wa-floating";
import BackToTop from "@/components/back-to-top";
import Reveal from "@/components/reveal";
import { getTestimonials } from "@/data/testimonials";
import { getBrandsWithPrograms } from "@/data/brands";
import { getCakraPointStats, getCakraPointRewards } from "@/data/cakra-points";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cakrawala EduCentre | Temukan Potensi, Raih PTN Impian",
  description:
    "Bimbingan belajar personal dengan tutor profesional lulusan PTN favorit. Screening potensi gratis, les privat SD/SMP/SMA, persiapan UTBK, dan program bahasa asing.",
  openGraph: {
    title: "Cakrawala EduCentre | Temukan Potensi, Raih PTN Impian",
    description:
      "Bimbingan intensif oleh tutor profesional. Screening potensi gratis, jadwal fleksibel, kurikulum terarah.",
  },
};

export default async function Home() {
  const [testimonials, brands, cakraStats, cakraRewards] = await Promise.all([
    getTestimonials(),
    getBrandsWithPrograms(),
    getCakraPointStats(),
    getCakraPointRewards(),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <AudienceSelector />
        </Reveal>
        <Reveal>
          <PopularPackages />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <ProgramsOverview brands={brands} />
        </Reveal>
        <Reveal>
          <WhyUs />
        </Reveal>
        <Reveal>
          <SocialProof testimonials={testimonials} />
        </Reveal>
        <Reveal>
          <CakraPointsPromo />
        </Reveal>
        <Reveal>
          <CakraPoints
            stats={cakraStats.map((s) => ({ ...s, suffix: s.suffix ?? "" }))}
            rewards={cakraRewards}
          />
        </Reveal>
        <Reveal>
          <ProcessSection />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <CtaConsult />
        </Reveal>
      </main>
      <Footer />
      <WaFloating />
      <BackToTop />
    </>
  );
}
