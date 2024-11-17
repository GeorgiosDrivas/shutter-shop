import "../styles/blog.style.css";

export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1>News, updates, tutorials and more</h1>
            </div>
            <div className="col-5 p-0">
              <p>
                Discover high-quality cameras, lenses, and accessories to
                elevate your photography. Capture life's beautiful moments with
                the best gear and services designed for professionals and
                enthusiasts alike.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="article-wrap">
                <div className="article-img">
                  <img
                    className="w-100 h-100"
                    src="/assets/article1.png"
                    alt="Article 1 Image"
                  />
                </div>
                <div className="article-info">
                  <div className="article-details d-flex justify-content-between align-items-center mb-3">
                    <a>Updates</a>
                    <p>1/16/25</p>
                  </div>
                  <div className="article-content">
                    <h2>Ab Molestiae Voluptas</h2>
                    <p>
                      Earum recusandae quis sed. Dolor asperiores atque
                      consequatur. Sa
                    </p>
                  </div>
                  <button className="p-0 mt-4">Read Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
