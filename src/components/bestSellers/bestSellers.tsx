import Cameras from "./bestSellersCameras";
import Lenses from "./bestSellersLenses";
import "../../styles/bestSellers.style.css";

export default function BestSellers() {
  return (
    <>
      <section className="best-sellers top">
        <Cameras />
      </section>
      <section className="best-sellers mt-0">
        <Lenses />
      </section>
    </>
  );
}
