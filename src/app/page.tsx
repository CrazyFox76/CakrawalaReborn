import Header from "@/components/header";
import Hero from "@/components/hero";
import PopularPackages from "@/components/popular-packages";
import About from "@/components/about";
import Programs from "@/components/Product";
import WhyUs from "@/components/why-us";
import CakraPointsPromo from "@/components/cakrapoints-promo";
import CakraPoints from "@/components/cakrapoints";
import Tutors from "@/components/tutors";
import Testimonials from "@/components/testimonials";
import BlogPreview from "@/components/blog-preview";
import Faq from "@/components/faq";
import CtaConsult from "@/components/cta-consult";
import Footer from "@/components/footer";
import WaFloating from "@/components/wa-floating";
import BackToTop from "@/components/back-to-top";
import Reveal from "@/components/reveal";
import { getTestimonials, getBrandsWithPrograms, getCakraPointStats, getCakraPointRewards } from "@/db/actions";

export default async function Home() {
  const [testimonials, brands, cakraStats, cakraRewards] = await Promise.all([
    getTestimonials(),
    getBrandsWithPrograms(),
    getCakraPointStats(),
    getCakraPointRewards(),
  ]);

  const sections = [
    { Component: () => <Programs brands={brands} />, id: "programs" },
    { Component: WhyUs, id: "why-us" },
    { Component: CakraPointsPromo, id: "cakrapoints-promo" },
    { Component: () => <CakraPoints stats={cakraStats.map(s => ({ ...s, suffix: s.suffix ?? "" }))} rewards={cakraRewards} />, id: "cakrapoints" },
    { Component: Tutors, id: "tutors" },
    { Component: BlogPreview, id: "blog" },
    { Component: Faq, id: "faq" },
    { Component: CtaConsult, id: "cta" },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <PopularPackages />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        {sections.map(({ Component, id }) => (
          <Reveal key={id}>
            <Component />
          </Reveal>
        ))}
        <Reveal>
          <Testimonials testimonials={testimonials} />
        </Reveal>
      </main>
      <Footer />
      <WaFloating />
      <BackToTop />
    </>
  );
}
