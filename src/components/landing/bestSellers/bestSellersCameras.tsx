import { Link } from "react-router-dom";
import "../../styles/bestSellers.style.css";

export default function Cameras({
  bestSellerText,
  viewButton,
}: {
  bestSellerText: string;
  viewButton: boolean;
}) {
  return (
    <>
      <div className="container p-0">
        <div className="row mb-4">
          <div className="col-12">
            <div className="best-seller best-seller-lenses-title text-center">
              {bestSellerText && <p className="category">{bestSellerText}</p>}
              <h2 className="section-h2">Cameras</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="best-seller-item">
              <div className="overflow-hidden best-seller-img position-relative">
                <img
                  className="w-100 h-100 position-absolute"
                  src="/assets/cameras/camera_1.png"
                  alt="Camera 1"
                />
              </div>
              <div className="details">
                <h3>Canon NAS</h3>
                <p>High-resolution camera for stunning image quality.</p>
                <p className="m-0">$ 300.00 USD</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="best-seller-item">
              <div className="overflow-hidden best-seller-img position-relative">
                <img
                  className="w-100 h-100 position-absolute"
                  src="/assets/cameras/camera_2.png"
                  alt="Camera 2"
                />
              </div>
              <div className="details">
                <h3>Nikon A9</h3>
                <p>
                  Exceptional performance and versatility for professionals.
                </p>
                <p className="m-0">$ 999.00 USD</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="best-seller-item">
              <div className="overflow-hidden best-seller-img position-relative">
                <img
                  className="w-100 h-100 position-absolute"
                  src="/assets/cameras/camera_3.png"
                  alt="Camera 3"
                />
              </div>
              <div className="details">
                <h3>Sony FE 24</h3>
                <p>Premium lens for sharp images and beautiful bokeh.</p>
                <p className="m-0">$ 450.00 USD</p>
              </div>
            </div>
          </div>
        </div>
        {viewButton && (
          <div className="row">
            <div className="col-12">
              <div className="more-products text-center mt-4">
                <Link to="/category/cameras" className="white-btn">
                  <button>View all Cameras</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
