import "../../styles/bestSellers.style.css";

export default function Lenses() {
  return (
    <>
      <div className="container p-0">
        <div className="row mb-4">
          <div className="col-12">
            <div className="best-seller best-seller-lenses-title text-center">
              <p className="category">Best Sellers</p>
              <h2>Lenses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="best-seller-item">
              <div className="overflow-hidden best-seller-img position-relative">
                <img
                  className="w-100 h-100 position-absolute"
                  src="../../../assets/lenses/lense_1.png"
                  alt="Camera 1"
                />
              </div>
              <div className="details">
                <h3>RetroFlex Vintage 50mm f/1.8 Prime Lens</h3>
                <p>
                  A classic 50mm prime lens offering timeless image quality with
                  a nostalgic touch.
                </p>
                <p className="m-0">$ 299.00 USD</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="best-seller-item">
              <div className="overflow-hidden best-seller-img position-relative">
                <img
                  className="w-100 h-100 position-absolute"
                  src="../../../assets/lenses/lense_2.png"
                  alt="Camera 2"
                />
              </div>
              <div className="details">
                <h3>OldeView Classic 135mm f/2.8 Telephoto Lens</h3>
                <p>
                  A vintage telephoto lens renowned for its smooth focus and
                  distinctive character.
                </p>
                <p className="m-0">$ 349.00 USD</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="best-seller-item">
              <div className="overflow-hidden best-seller-img position-relative">
                <img
                  className="w-100 h-100 position-absolute"
                  src="../../../assets/lenses/lense_3.png"
                  alt="Camera 3"
                />
              </div>
              <div className="details">
                <h3>Canon EF 50mm f/1.8 STM Lens</h3>
                <p>
                  A compact and versatile prime lens ideal for portraits and
                  low-light photography.
                </p>
                <p className="m-0">$ 125.00 USD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="more-products text-center mt-4">
              <button className="">View all Lenses</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}