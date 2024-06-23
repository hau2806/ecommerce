import React from "react";
import SliderHero from "./CarouselForHero";
import Hero1 from "../../assets/image/HeroSlider_1.jpeg";
import Hero2 from "../../assets/image/HeroSilder_2.jpeg";
import Hero3 from "../../assets/image/HeroSlider_3.jpeg";

const slides = [
  {
    imgSrc: Hero1,
    altText: "Image 1",
    title: "SALE OFF 35%",
    preTitle: "Our best",
    description: "apple watch series 1",
    title2: "At $99 - Only for today",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore alias tenetur neque.",
  },
  {
    imgSrc: Hero2,
    altText: "Image 2",
    title: "OFFER 25% OFF",
    preTitle: "Our best",
    description: "apple watch series 7",
    title2: "Make a rich life",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore alias tenetur neque.",
  },
  {
    imgSrc: Hero3,
    altText: "Image 3",
    title: "FLAT 20% OFF",
    preTitle: "Our best",
    description: "apple watch series 6",
    title2: "Starting at $99.99",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore alias tenetur neque.",
  },
];

const Hero: React.FC = () => {
  return (
    <div className="overflow-x-hidden mb-12">
      <SliderHero slides={slides} />
    </div>
  );
};

export default Hero;
