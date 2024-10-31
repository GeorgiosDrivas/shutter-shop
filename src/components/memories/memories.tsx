import "../../styles/memories.style.css";
import SingleMemory from "./singleMemory";

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
                  src="/assets/memories_img.png"
                  alt="Memories Image"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="memories-content">
                <h2>Create Memories That Last a Lifetime</h2>
                <SingleMemory
                  title="Print Your Photos"
                  content="Transform digital images into tangible keepsakes with our
                    high-quality printing services."
                />
                <SingleMemory
                  title="Custom Albums"
                  content="Preserve your favorite moments in elegantly designed photo
                    albums."
                />
                <SingleMemory
                  title="Gift Ideas"
                  content="Find the perfect gift for photography lovers, from
                    accessories to gift cards."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
