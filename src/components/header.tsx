import { Link } from "react-router-dom";
import "../globalStyles/header.style.css";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

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
                  <ul className="d-flex justify-content-between align-items-center m-0 p-0 main-nav">
                    <li className="fw-bold position-relative cursor-pointer">
                      <div
                        className="fw-bold"
                        id="menu-select"
                        onClick={() => setMenu((prv) => !prv)}
                      >
                        Shop
                        <svg
                          className="menu-select-icon position-absolute"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          height="15px"
                          width="15px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="0 0 330 330"
                        >
                          <path
                            id="XMLID_222_"
                            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
                          />
                        </svg>
                        <div className={menu ? "open" : ""}>
                          <a href="#">All Products</a>
                          <a href="#">Cameras</a>
                          <a href="#">Lenses</a>
                        </div>
                      </div>
                    </li>
                    <li className="fw-bold position-relative cursor-pointer">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="fw-bold position-relative cursor-pointer">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="fw-bold position-relative cursor-pointer">
                      Blog
                    </li>
                    <li className="fw-bold position-relative cursor-pointer">
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
