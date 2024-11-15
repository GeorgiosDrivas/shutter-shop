import Lenses from "../landing/bestSellers/bestSellersLenses";
import "../styles/products.style.css";

export default function LenseProducts() {
  return (
    <>
      <section id="products-lenses">
        <Lenses bestSellerText="All" viewButton={false} />
      </section>
    </>
  );
}
