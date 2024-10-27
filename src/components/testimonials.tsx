import "../styles/testimonials.style.css";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">
                What our
                <br /> customers say
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonials-swiper"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="numbers text-center">
                <p className="mb-0">600+</p>
                <p className="text-uppercase">satisfied customers</p>
              </div>
            </div>
            <div className="col-4">
              <div className="numbers text-center">
                <p className="mb-0">9 of 10</p>
                <p className="text-uppercase">rate of service as excellent</p>
              </div>
            </div>
            <div className="col-4">
              <div className="numbers text-center">
                <p className="mb-0">97%</p>
                <p className="text-uppercase">recommend our shop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
