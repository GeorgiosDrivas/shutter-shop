import "../styles/services-page.style.css";

export default function Services() {
  return (
    <>
      <section id="services-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="services-hero-wrap d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-uppercase text-center">
                  Discover Our <br />
                  Photography
                  <br /> Services
                </h1>
                <p className="text-center">
                  We are passionate about capturing life's precious moments. Our
                  team of <br />
                  skilled photographers and state-of-the-art equipment ensure
                  that every shot <br />
                  is a masterpiece. Explore our range of services designed to
                  meet all your
                  <br /> photography needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="core-services">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="core-services">
                  <h1 className="text-center">Our Core Services</h1>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <div className="workshops">
                  <h3>Photography Workshops & Classes</h3>
                  <p>
                    Capture the essence of your personality with our
                    personalized portrait sessions.
                  </p>
                  <ul className="mb-5">
                    <li>
                      <b>Beginner Courses:</b> Get started with the fundamentals
                      of photography.
                    </li>
                    <li>
                      <b>Advanced Techniques:</b> Master lighting, composition,
                      and editing.
                    </li>
                    <li>
                      <b>One-on-One Mentoring:</b> Personalized guidance from
                      our professional photographers.
                    </li>
                  </ul>
                  <img
                    src="/assets/core-services-img.png"
                    alt="Core Services"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column align-items-center h-100">
                  <div className="equipment">
                    <h3>Equipment Services</h3>
                    <p>
                      Keep your photography gear in optimal condition with our
                      expert equipment services.
                    </p>
                    <ul>
                      <li>
                        <b>Camera Maintenance & Cleaning:</b> Routine checks and
                        thorough cleaning to ensure your camera functions
                        flawlessly.
                      </li>
                      <li>
                        <b>Equipment Rental:</b> Access a wide range of
                        professional cameras, lenses, and accessories for your
                        projects.
                      </li>
                      <li>
                        <b>Firmware Updates & Upgrades:</b> Stay current with
                        the latest software enhancements and hardware upgrades.
                      </li>
                    </ul>
                  </div>
                  <div className="framing w-100 h-50">
                    <h3>Printing & Framing Services</h3>
                    <p>Turn your favorite images into tangible keepsakes.</p>
                    <ul>
                      <li>
                        <b>Canvas & Metal Prints:</b> Unique ways to display
                        your photographs.
                      </li>
                      <li>
                        <b>Canvas & Metal Prints:</b> Unique ways to display
                        your photographs.
                      </li>
                      <li>
                        <b>Framing Services:</b> Expert framing to complement
                        your images.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="all-services">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="all-services-single-content">
                  <h2>All Services</h2>
                  <p>
                    The service we offer is specifically designed to meet your
                    needs.
                  </p>
                  <button className="text-uppercase">Contact us</button>
                </div>
              </div>
              <div className="col-4">
                <div className="service-wrapper">
                  <h3>Portrait Photography</h3>
                  <p className="my-4">
                    Capture the essence of your personality with our
                    personalized portrait sessions.
                  </p>
                  <ul className="ps-4">
                    <li>Create lasting memories with your loved ones.</li>
                    <li>
                      Professional headshots and personal branding images.
                    </li>
                    <li>Cherish the early stages of your child's life.</li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="service-wrapper">
                  <h3>Event Photography</h3>
                  <p className="my-4">
                    Preserve the excitement and emotions of your special events.
                  </p>
                  <ul className="ps-4">
                    <li>Comprehensive coverage of your big day.</li>
                    <li>
                      Professional documentation of conferences, meetings, and
                      parties.
                    </li>
                    <li>Celebrate milestones with beautiful photographs.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <div className="service-wrapper">
                  <h3>Studio Photography</h3>
                  <p className="my-4">
                    Take advantage of our fully equipped studio for controlled
                    and creative shoots.
                  </p>
                  <ul className="ps-4">
                    <li>
                      High-quality images for catalogs, websites, and marketing
                      materials.
                    </li>
                    <li>
                      Showcase clothing and accessories with professional flair.
                    </li>
                    <li>
                      Bring artistic visions to life with our creative team.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="service-wrapper">
                  <h3>Outdoor & Location Shoots</h3>
                  <p className="my-4">
                    Embrace natural settings for dynamic and vibrant
                    photographs.
                  </p>
                  <ul className="ps-4">
                    <li>Capture your love story in meaningful locations.</li>
                    <li>
                      Document real-life events and situations artistically.
                    </li>
                    <li>Stunning images of nature and urban environments.</li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="service-wrapper">
                  <h3>Printing & Framing Services</h3>
                  <p className="my-4">
                    Turn your favorite images into tangible keepsakes.
                  </p>
                  <ul className="ps-4">
                    <li>High-quality prints in various sizes and finishes.</li>
                    <li>Unique ways to display your photographs.</li>
                    <li>Expert framing to complement your images.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
