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
      <section id="who-we-are">
        <div className="container">
          <div className="row align-items-top mb-5">
            <div className="col-6">
              <h2>Who we are</h2>
            </div>
            <div className="col-6">
              <p>Meet the talented individuals behind our business.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="single-person position-relative">
                <img
                  className="w-100 h-100"
                  src="/assets/person1.png"
                  alt="Single Person Image"
                />
                <div className="single-person-details position-absolute w-100 ps-4">
                  <p className="m-0">John Smith</p>
                  <p className="m-0">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="single-person position-relative">
                <img className="w-100 h-100" src="/assets/person2.png" alt="" />
                <div className="single-person-details position-absolute w-100 ps-4">
                  <p className="m-0">Kendrica Johnson</p>
                  <p className="m-0">Camera Technician</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="single-person position-relative">
                <img className="w-100 h-100" src="/assets/person3.png" alt="" />
                <div className="single-person-details position-absolute w-100 ps-4">
                  <p className="m-0">Mathew Douglas</p>
                  <p className="m-0">Chief Operating Officer</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="single-person position-relative">
                <img className="w-100 h-100" src="/assets/person4.png" alt="" />
                <div className="single-person-details position-absolute w-100 ps-4">
                  <p className="m-0">Kristen Borman</p>
                  <p className="m-0">Head of Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="connect">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="title">
                <p className="text-uppercase">Reach out to Camerax</p>
                <h3 className="text-uppercase mb-4">Connect with us</h3>
                <p>Our dedicated team is here to assist you.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="connect-details">
                <div className="connect-detail">
                  <h5 className="m-0">Email Us</h5>
                  <p className="m-0">We're ready to answer your questions.</p>
                  <a href="#">support@email.com</a>
                </div>
                <div className="connect-detail">
                  <h5 className="m-0">Call Us</h5>
                  <p className="m-0">Available Mon - Fri, 8am - 5pm.</p>
                  <a href="#">+1 (555) 123-4567</a>
                </div>
                <div className="connect-detail">
                  <h5 className="m-0">Visit Us</h5>
                  <p className="m-0">Stop by our office for a chat.</p>
                  <a href="#">123 Photo Street, SF, CA</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="connect-map"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
