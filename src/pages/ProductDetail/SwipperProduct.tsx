import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../../index.css";

import slide_image_1 from "../../assets/image/BannerSale_1.jpeg";
import slide_image_2 from "../../assets/image/BannerSale_2.jpeg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SwiperComponent() {
  return (
    <div className="container my-20">
      <h1 className="heading text-center">
        Other products in the same category
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src={slide_image_1}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_1}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_2}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_1}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_2}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_1}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_2}
            alt="slide_image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IoIosArrowBack name="arrow-back-outline"></IoIosArrowBack>
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoIosArrowForward name="arrow-forward-outline"></IoIosArrowForward>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
