import "./styles/hero.styles.css";

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                id="hero-wrap"
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <p className="mb-3" id="moto">
                  We are ShutterShopX
                </p>
                <h1 className="text-uppercase">
                  For All Things
                  <br /> Photography
                </h1>
                <p>
                  Discover high-quality cameras, lenses, and accessories to
                  elevate your photography.
                  <br /> Capture life's beautiful moments with the best gear and
                  services designed for
                  <br /> professionals and enthusiasts alike.
                </p>
                <div className="hero-btns d-flex justify-content-around align-items-center">
                  <button className="button text-uppercase">Shop</button>
                  <button className="button tr-bg text-uppercase">
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div id="hero-img">
                <img
                  className="h-100 w-100 mb-5"
                  src="/assets/hero_page.png"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
