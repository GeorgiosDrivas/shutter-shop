import "../styles/memories.style.css";

export default function Memories() {
  return (
    <>
      <section id="memories">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <div className="memories-img">
                <img
                  className="h-100 w-100"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/assets/memories_img.png`}
                  alt="Memories Image"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="memories-content">
                <h2>Create Memories That Last a Lifetime</h2>
                <div className="memories-single-service">
                  <p>Print Your Photos</p>
                  <p>
                    Transform digital images into tangible keepsakes with our
                    high-quality printing services.
                  </p>
                </div>
                <div className="memories-single-service">
                  <p>Custom Albums</p>
                  <p>
                    Preserve your favorite moments in elegantly designed photo
                    albums.
                  </p>
                </div>
                <div className="memories-single-service">
                  <p>Gift Ideas</p>
                  <p>
                    Find the perfect gift for photography lovers, from
                    accessories to gift cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
