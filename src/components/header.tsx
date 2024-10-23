import "../styles/header.style.css";

export default function Header() {
  return (
    <>
      <section id="header">
        <div className="container-fluid p-0">
          <div className="row justify-content-center">
            <div className="col-9">
              <div
                id="header-wrap"
                className="d-flex justify-content-between align-items-center"
              >
                <img id="logo" src="../assets/shutter-shop-logo.svg" alt="" />
                <div className="header-nav">
                  <ul className="d-flex justify-content-between align-items-center">
                    <li>Shop</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
