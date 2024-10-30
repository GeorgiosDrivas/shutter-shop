import "../styles/contact.style.css";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h1>Contact Us</h1>
              <p>
                Need help? Our support team are here to answer all your
                questions.
              </p>
              <div className="mt-3">
                <p>info@gmail.com</p>
                <p>1.800.000.000</p>
                <p>123 Acme street</p>
              </div>
            </div>
            <div className="col-9">
              <div className="contact-form">
                <form>
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
