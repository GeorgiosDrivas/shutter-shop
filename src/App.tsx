import BestSellers from "./components/bestSellers/bestSellers";
import Header from "./components/header";
import Landing from "./components/landing/landing";
import Services from "./components/services";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <Header />
      <Landing />
      <BestSellers />
      <Services />
    </>
  );
}
