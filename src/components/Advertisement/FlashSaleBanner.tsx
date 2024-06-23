import React from "react";
import flashBanner from "../../assets/image/BannerSale_1.jpeg";

const FlashSaleBanner = () => {
  return (
    <div>
      <section className="text-gray-600 py-12 body-font">
        <div className="w-full flex flex-wrap">
          <img src={flashBanner} alt="" />
        </div>
      </section>
    </div>
  );
};

export default FlashSaleBanner;
