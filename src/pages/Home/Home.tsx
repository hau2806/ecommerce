import AdsBannerPC from "../../components/Advertisement/AdsBannerPC";
import AdsBannerCamera from "../../components/Advertisement/AdsBannerCamera";
import BestSellerItem from "../../components/Carousel/BestSellerItem";
import TrendingProduct from "../../components/Carousel/TrendingProduct";
import SpecialProduct from "../../components/Carousel/SpecialProduct";
import { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";
import Hero from "../../components/Carousel/HeroSlider";
import HomeIntro from "../../components/Carousel/HomeIntro";
import AdsWatchesSale from "../../components/Advertisement/AdsWatchesSale";
import AdsWatchesSale2 from "../../components/Advertisement/AdsWatchesSale2";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <HomeIntro />
      <Hero />
      <div className="max-w-full xl:w-[90%] mx-auto px-1 sm:px-5">
        {/* <Filter />  */}
        <div className="flex gap-6 justify-between my-4 w-full items-center">
          <BestSellerItem />
        </div>
        {/* <TrendingProduct /> */}
        <div className="flex mb-8 max-lg:gap-4 gap-6 max-sm:px-2">
          <AdsBannerPC />
          <AdsBannerCamera />
        </div>
        <div className="flex gap-2 sm:gap-8 lg:gap-16 w-full mb-8 overflow-hidden">
          <BestSellerItem />
        </div>
        {/* <TrendingProduct /> */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 my-12">
          <AdsWatchesSale />
          <AdsWatchesSale2 />
        </div>
        <SpecialProduct />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
