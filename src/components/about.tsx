import "../styles/about.style.css";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="about-moto">
                <h2>
                  Founded with a love for capturing moments, our photography
                  shop has evolved into a vibrant community hub for enthusiasts
                  and professionals alike. We are dedicated to providing
                  high-quality products and services while fostering a passion
                  for photography in <br />
                  every customer.
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-end mt-5">
            <div className="col-8 me-5">
              <div className="about-img-hero">
                <img
                  className="w-100 h-100"
                  src="/assets/about_img_1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="passion-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-5 p-0">
              <div id="passion-content">
                <h3>Passion for Photography Since Day One</h3>
                <p>
                  Founded with a love for capturing moments, our photography
                  shop has evolved into a vibrant community hub for enthusiasts
                  and professionals alike. We are dedicated to providing
                  high-quality products and services while fostering a passion
                  for photography in every customer.
                </p>
              </div>
            </div>
            <div className="col-6 p-0">
              <div id="passion-image">
                <img
                  className="w-100 h-100"
                  src="/assets/about-passion-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
