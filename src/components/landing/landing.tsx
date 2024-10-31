import BestSellers from "./bestSellers/bestSellers";
import Memories from "./memories/memories";
import Moments from "./moments";
import Services from "./services";
import Testimonials from "./testimonials/testimonials";
import Values from "./values";
import Hero from "./hero";

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
