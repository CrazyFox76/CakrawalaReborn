import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Programs from "@/components/programs";
import WhyUs from "@/components/why-us";
import Testimonials from "@/components/testimonials";
import BlogPreview from "@/components/blog-preview";
import CtaConsult from "@/components/cta-consult";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Testimonials />
        <BlogPreview />
        <CtaConsult />
      </main>
      <Footer />
    </>
  );
}
