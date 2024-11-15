import Cameras from "./bestSellersCameras";
import Lenses from "./bestSellersLenses";
import "../../styles/bestSellers.style.css";

export default function BestSellers() {
  return (
    <>
      <section className="best-sellers top">
        <Cameras bestSellerText={true} />
      </section>
      <section className="best-sellers mt-0">
        <Lenses bestSellerText={true} />
      </section>
    </>
  );
}
