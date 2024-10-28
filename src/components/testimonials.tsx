import "../styles/testimonials.style.css";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="../../assets/testimonial_img.png" alt="" />
                      <p>
                        Incredible service and product quality! I found
                        everything I needed for my photography business.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="../../assets/testimonial_img.png" alt="" />
                      <p>
                        "The team was so helpful in guiding me to the perfect
                        camera. Highly recommend!"
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="../../assets/testimonial_img.png" alt="" />
                      <p>
                        "Their workshops are fantastic! I've improved my
                        photography skills significantly."
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <div className="numbers text-center">
                <p className="mb-0">600+</p>
                <p className="text-uppercase">satisfied customers</p>
              </div>
            </div>
            <div className="col-4">
              <div className="numbers text-center">
                <p className="mb-0">9 of 10</p>
                <p className="text-uppercase">rate of service as excellent</p>
              </div>
            </div>
            <div className="col-4">
              <div className="numbers text-center">
                <p className="mb-0">97%</p>
                <p className="text-uppercase">recommend our shop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
