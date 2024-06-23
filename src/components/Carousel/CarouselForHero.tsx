import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

interface Slide {
  preTitle: string;
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  title2: string;
  desc: string;
}

interface SliderHeroProps {
  slides: Slide[];
}

const SliderHero: React.FC<SliderHeroProps> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative transition-all overflow-x-hidden max-sm:h-[200px]"
        >
          <img
            src={slide.imgSrc}
            alt={slide.altText}
            className="w-full max-sm:h-full object-cover"
          />
          <div className="absolute bottom-0 justify-center w-[55%] left-0 p-4 sm:p-10 lg:p-14 xl:p-20 text-white flex flex-col gap-[6px] sm:gap-2 lg:gap-3 xl:gap-6 h-full">
            <p className="text-base lg:text-lg xl:text-xl text-primary-01 uppercase">
              {slide.preTitle}
            </p>
            <p className="text-[10px] sm:text-xl lg:text-3xl xl:text-4xl font-medium text-gray-900 uppercase">
              {slide.description}
            </p>
            <p className="text-[10px] sm:text-sm lg:text-base xl:text-lg text-gray-700">
              {slide.desc}
            </p>
            <p className="text-sm sm:text-4xl lg:text-5xl xl:text-[66px] xl:leading-[70px] ease-in-out duration-300 font-semibold text-primary-01 ">
              {slide.title}
            </p>

            <Link
              to="/sale"
              className="w-fit hover:font-medium hover:translate-x-3 delay-100 duration-150 text-primary-03 flex items-center max-sm:text-sm"
            >
              <MdPlayArrow className="mr-2" />
              See more
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderHero;
