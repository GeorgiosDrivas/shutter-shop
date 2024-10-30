import Header from "./components/header";
import Landing from "./components/landing/landing";
import "./styles/app.css";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
