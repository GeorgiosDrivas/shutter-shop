import Header from "./components/header";
import Landing from "./components/landing/landing";
import "./globalStyles/app.css";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about/about";
import Services from "./components/services/services";
import AllProducts from "./components/Products/allProducts";
import CamerasProducts from "./components/Products/cameras";
import LenseProducts from "./components/Products/lenses";
import Blog from "./components/blog/blog";

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
          <Route path="/category/cameras" element={<CamerasProducts />} />
          <Route path="/category/lenses" element={<LenseProducts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
