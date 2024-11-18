import "../styles/blog.style.css";
import BlogPost from "./blogPost";

export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="row mb-5">
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
              <BlogPost
                image="/assets/article1.png"
                category="Updates"
                date="1/16/25"
                title="Ab Molestiae Voluptas"
                content="Earum recusandae quis sed. Dolor asperiores atque consequatur. Sa"
              />
            </div>
            <div className="col-4">
              <BlogPost
                image="/assets/article2.png"
                category="Press"
                date="12/27/24"
                title="Alias"
                content="Dolores porro nostrum aut id nisi sit impedit. Qui expedita numquam pariatur molestiae vel. Minus"
              />
            </div>
            <div className="col-4">
              <BlogPost
                image="/assets/article3.png"
                category="Tutorial"
                date="7/2/24"
                title="Aut Quo"
                content="Sed sunt non cumque aut impedit et. Ut adipisci molestias. Veniam dicta illo exercitationem consequatur eligendi"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
