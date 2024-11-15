import Cameras from "../landing/bestSellers/bestSellersCameras";
import Lenses from "../landing/bestSellers/bestSellersLenses";
import Moments from "../landing/moments";
import "../styles/allProducts.style.css";

export default function AllProducts() {
  return (
    <>
      <section id="all-products">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="mb-4">OUR PRODUCTS</h1>
              <p>
                Discover our extensive range of photography equipment and
                services designed to meet the needs of <br />
                professionals and enthusiasts alike. From cutting-edge digital
                cameras and unique vintage lenses to <br />
                essential accessories and expert services, explore everything
                you need to capture and cherish life's <br />
                most beautiful moments.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <section className="best-sellers top">
                <Cameras bestSellerText={false} />
              </section>
              <section className="best-sellers mt-0">
                <Lenses bestSellerText={false} />
              </section>
            </div>
          </div>
        </div>
        <Moments />
      </section>
    </>
  );
}
