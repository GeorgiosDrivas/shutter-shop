import "../styles/about.style.css";
import SinglePerson from "./singlePerson";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="d-flex flex-column align-items-center justify-content-center w-100"
      >
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
                  alt="Hero image"
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
              <div id="passion-image" className="w-100">
                <img
                  className="w-100 h-100"
                  src="/assets/about-passion-img.png"
                  alt="Passion image"
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
              <SinglePerson
                name="John Smith"
                title="Founder & CEO"
                image="person1"
              />
            </div>
            <div className="col-3">
              <SinglePerson
                name="Kendrica Johnson"
                title="Camera Technician"
                image="person2"
              />
            </div>
            <div className="col-3">
              <SinglePerson
                name="Mathew Douglas"
                title="Chief Operating Officer"
                image="person3"
              />
            </div>
            <div className="col-3">
              <SinglePerson
                name="Kristen Borman"
                title="Head of Marketing"
                image="person4"
              />
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
                <p className="mb-5">
                  Our dedicated team is here to assist you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="connect-details">
                <div className="connect-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.25 6.75H18.75V17.25H5.25V6.75Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.25 6.75L12 12L18.75 6.75"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="m-0">Email Us</h5>
                  <p className="m-0">We're ready to answer your questions.</p>
                  <a href="#">support@email.com</a>
                </div>
                <div className="connect-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.5 18.25C16.2279 18.25 19.25 15.2279 19.25 11.5C19.25 7.77208 16.2279 4.75 12.5 4.75C8.77208 4.75 5.75 7.77208 5.75 11.5C5.75 12.6007 6.01345 13.6398 6.48072 14.5578L5 19L9.71819 17.6519C10.5664 18.0361 11.5082 18.25 12.5 18.25Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="m-0">Call Us</h5>
                  <p className="m-0">Available Mon - Fri, 8am - 5pm.</p>
                  <a href="#">+1 (555) 123-4567</a>
                </div>
                <div className="connect-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.3918 14.8527C20.2489 10.9956 17.2769 4.25 12 4.25C6.72299 4.25 3.75102 10.9956 7.60817 14.8527L12 19.25L16.3918 14.8527Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10.25"
                      r="2"
                      stroke="black"
                      stroke-width="1.5"
                    />
                  </svg>
                  <h5 className="m-0">Visit Us</h5>
                  <p className="m-0">Stop by our office for a chat.</p>
                  <a href="#">123 Photo Street, SF, CA</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="connect-map">
                <img
                  className="w-100 h-100"
                  src="/assets/about_map.png"
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
