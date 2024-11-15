import Cameras from "../landing/bestSellers/bestSellersCameras";
import "../styles/products.style.css";

export default function CamerasProducts() {
  return (
    <>
      <section id="products-cameras">
        <Cameras bestSellerText="All" viewButton={false} />
      </section>
    </>
  );
}
