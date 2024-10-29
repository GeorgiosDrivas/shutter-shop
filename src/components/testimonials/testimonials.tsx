import "../../styles/testimonials.style.css";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Numbers from "./numbers";
import Slide from "./slide";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">
                What our
                <br /> customers say
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonials-swiper">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  navigation
                  loop={true}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <Slide
                      content="Incredible service and product quality! I found
                        everything I needed for my photography business."
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slide
                      content="The team was so helpful in guiding me to the perfect
                        camera. Highly recommend!"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slide
                      content="Their workshops are fantastic! I've improved my
                        photography skills significantly."
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <Numbers percent="600+" content="satisfied customers" />
            <Numbers percent="9 of 10" content="rate of service as excellent" />
            <Numbers percent="97%" content="recommend our shop" />
          </div>
        </div>
      </section>
    </>
  );
}
