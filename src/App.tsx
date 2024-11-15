import Header from "./components/header";
import Landing from "./components/landing/landing";
import "./globalStyles/app.css";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about/about";
import Services from "./components/services/services";
import AllProducts from "./components/allProducts/allProducts";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
