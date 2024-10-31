import "./styles/services.style.css";

export default function Services() {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center">
                <h2 className="text-uppercase mb-5">Our services</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 p-0">
              <div className="single-service text-center">
                <h3>Camera Repair</h3>
                <p>
                  Get your camera back in action with our expert repair
                  services.
                </p>
                <button className="text-uppercase">Learn More</button>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-0">
              <div className="single-service text-center">
                <h3>Film Development</h3>
                <p>
                  Preserve your memories with professional film development and
                  digitization.
                </p>
                <button className="text-uppercase">Learn More</button>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-0">
              <div className="single-service last text-center">
                <h3>Photography Workshops</h3>
                <p>
                  Enhance your skills with our hands-on workshops for all
                  levels.
                </p>
                <button className="text-uppercase">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
