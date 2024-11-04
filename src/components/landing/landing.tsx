import BestSellers from "@components/landing/bestSellers/bestSellers";
import Memories from "@components/landing/memories/memories";
import Moments from "@components/landing/moments";
import Services from "@components/landing/services";
import Testimonials from "@components/landing/testimonials/testimonials";
import Values from "@components/landing/values";
import Hero from "@components/landing/hero";

export default function Landing() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Services />
      <Values />
      <Testimonials />
      <Memories />
      <Moments />
    </>
  );
}
