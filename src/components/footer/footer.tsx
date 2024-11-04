import "@globalStyles/footer.style.css";
import FooterSocials from "@components/footer/footerSocials";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-6">
              <div className="newsletter-content">
                <p>Join our newsletter</p>
                <p>
                  Get the latest tips, tutorials, and exclusive deals straight
                  to your inbox.
                </p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
              <div className="newsletter-form d-flex flex-column align-items-start justify-content-end">
                <form>
                  <input type="text" placeholder="Enter your email" />
                  <button className="text-uppercase">Subscribe</button>
                </form>
                <p>We care about your data in our privacy policy.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <FooterSocials />
            </div>
            <div className="col-7">
              <div className="footer-nav d-flex justify-content-around align-items-start">
                <div>
                  <p>Product</p>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <a href="">Shop</a>
                    <a href="">Services</a>
                  </div>
                </div>
                <div>
                  <p>Company</p>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                  </div>
                </div>
                <div>
                  <p>Other Pages</p>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <a href="">Sign up</a>
                    <a href="">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="footer-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <a href="" className="me-3">
                    Licenses
                  </a>
                  <a href="" className="me-3">
                    Style Guide
                  </a>
                  <a href="">Change Log</a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="me-4">
                    Made by{" "}
                    <a href="https://www.aaronrudyk.com/" target="_blank">
                      Aaron Rudyk
                    </a>
                  </p>
                  <p> Powered by Webflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
