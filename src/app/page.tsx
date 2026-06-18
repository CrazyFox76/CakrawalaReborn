import Header from "@/components/header";
import Hero from "@/components/hero";
import PopularPackages from "@/components/popular-packages";
import CakraPoints from "@/components/cakrapoints";
import Programs from "@/components/Product";
import Tutors from "@/components/tutors";
import Testimonials from "@/components/testimonials";
import BlogPreview from "@/components/blog-preview";
import Faq from "@/components/faq";
import CtaConsult from "@/components/cta-consult";
import Footer from "@/components/footer";
import WaFloating from "@/components/wa-floating";
import BackToTop from "@/components/back-to-top";
import Reveal from "@/components/reveal";
import { getTestimonials, getBrandsWithPrograms } from "@/db/actions";

export default async function Home() {
  const [testimonials, brands] = await Promise.all([
    getTestimonials(),
    getBrandsWithPrograms(),
  ]);

  const sections = [
    { Component: () => <Programs brands={brands} />, id: "programs" },
    { Component: CakraPoints, id: "cakrapoints" },
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
