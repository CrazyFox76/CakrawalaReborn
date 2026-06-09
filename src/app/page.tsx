import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import CakraPoints from "@/components/cakrapoints";
import CakraPointsPromo from "@/components/cakrapoints-promo";
import Programs from "@/components/Product";
import WhyUs from "@/components/why-us";
import Tutors from "@/components/tutors";
import Testimonials from "@/components/testimonials";
import BlogPreview from "@/components/blog-preview";
import Faq from "@/components/faq";
import CtaConsult from "@/components/cta-consult";
import ScreeningRaport from "@/components/screening-raport";
import Footer from "@/components/footer";
import WaFloating from "@/components/wa-floating";
import BackToTop from "@/components/back-to-top";
import Reveal from "@/components/reveal";
import { getTestimonials } from "@/db/actions";

export default async function Home() {
  const testimonials = await getTestimonials();

  const sections = [
    { Component: About, id: "about" },
    { Component: CakraPoints, id: "cakrapoints" },
    { Component: CakraPointsPromo, id: "cakrapoints-promo" },
    { Component: Programs, id: "programs" },
    { Component: WhyUs, id: "why-us" },
    { Component: Tutors, id: "tutors" },
    { Component: BlogPreview, id: "blog" },
    { Component: Faq, id: "faq" },
    { Component: CtaConsult, id: "cta" },
    { Component: ScreeningRaport, id: "screening" },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />
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
