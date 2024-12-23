import { Link } from "react-router-dom";
import "../styles/moments.style.css";

export default function Moments() {
  return (
    <>
      <section id="moments">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-9">
              <div className="moments-wrap position-relative d-flex flex-column justify-content-center align-items-center">
                <h2 className="section-h2 text-capitalize">
                  Capture Beautiful Moments
                </h2>
                <p className="text-center">
                  We offer professional photography services and products to
                  help you capture life's most beautiful moments.
                  <br /> Explore our investment strategies and savings accounts
                  to optimize your earnings and achieve your financial
                  <br /> goals.
                </p>
                <Link to="/services">
                  <button className="text-uppercase">Discover More</button>
                </Link>
                <div className="position-absolute moments-img">
                  <img
                    src="/assets/moments_img.png"
                    alt="Moments Image"
                    className="w-100 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
