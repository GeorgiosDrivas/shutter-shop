import { Link } from "react-router-dom";
import "../styles/values.style.css";

export default function Values() {
  return (
    <>
      <section id="values">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="section-h2 mb-3">
                  We Value Unique
                  <br />
                  Quality
                </h2>
                <p>
                  At Photography Shop, we believe in capturing
                  <br /> moments with a unique touch. Our curated
                  <br /> selection of equipment and services helps you
                  <br /> express your creativity and style.
                </p>
                <Link to="/all-products">
                  <button className="text-uppercase mb-5 white-btn-hover">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="values-wrap d-flex justify-content-center position-relative">
                <img src="/assets/values_center.png" alt="Values Image 1" />
                <div className="values-small-img left-top position-absolute">
                  <img
                    className="w-100 h-100"
                    src="/assets/values_left_top.png"
                    alt="Values Image 2"
                  />
                </div>
                <div className="values-small-img right-top position-absolute">
                  <img
                    className="w-100 h-100"
                    src="/assets/values_right_top.png"
                    alt="Values Image 3"
                  />
                </div>
                <div className="values-small-img left-bot position-absolute">
                  <img
                    className="w-100 h-100"
                    src="/assets/values_left_bot.png"
                    alt="Values Image 4"
                  />
                </div>
                <div className="values-small-img right-bot position-absolute">
                  <img
                    className="w-100 h-100"
                    src="/assets/values_right_bot.png"
                    alt="Values Image 5"
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
