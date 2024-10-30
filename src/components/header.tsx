import { Link } from "react-router-dom";
import "../styles/header.style.css";

export default function Header() {
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 p-0">
              <div
                id="header-wrap"
                className="d-flex justify-content-between align-items-center"
              >
                <Link to="/">
                  <img
                    id="logo"
                    src="/assets/shutter-shop-logo.svg"
                    alt="Logo"
                  />
                </Link>
                <div className="d-flex justify-content-center">
                  <ul className="d-flex justify-content-between align-items-center p-0 main-nav">
                    <li>Shop</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div>
                    <button id="cart" className="text-uppercase">
                      Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
