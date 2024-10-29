import BestSellers from "./components/bestSellers/bestSellers";
import Header from "./components/header";
import Landing from "./components/landing/landing";
import Memories from "./components/memories";
import Services from "./components/services";
import Testimonials from "./components/testimonials/testimonials";
import Values from "./components/values";
import Moments from "./components/moments";
import "./styles/app.css";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <Header />
      <Landing />
      <BestSellers />
      <Services />
      <Values />
      <Testimonials />
      <Memories />
      <Moments />
      <Footer />
    </>
  );
}
