import { StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesInfo = {
    image: [
      "https://demo4techies.com/etrend/presta/smartwatch/30-home_default/numquam-eius.jpg",
      "https://demo4techies.com/etrend/presta/smartwatch/16-home_default/rem-aperiam.jpg",
      "https://demo4techies.com/etrend/presta/smartwatch/18-home_default/rem-aperiam.jpg",
      "https://demo4techies.com/etrend/presta/smartwatch/20-home_default/rem-aperiam.jpg",
    ],
    title: ["Movement", "Material", "Types", "Colour"],
    categories: [
      ["Automatic", "Chronograph", "Digital", "Mechanical"],
      ["Stainless", "Ceramic", "Pearl", "Titanium"],
      ["Analog", "Military", "Retro", "Pocket"],
      ["Black", "White", "Gold", "Silver"],
    ],
  };
  return (
    <div className="text-white flex-1 rounded-t-lg border-2 border-secondary-01 overflow-hidden max-w-full mb-4">
      <div className="carousel-heading py-3 px-8 flex items-center justify-between bg-primary-01 rounded-t-md text-sm md:text-base">
        <p className="font-bold tracking-wider uppercase leading-[30px]">
          Shop by Categories
        </p>
      </div>
      <div className="flex justify-between p-3 flex-wrap">
        {Array.from({ length: categoriesInfo.image.length }, (_, index) => (
          <div
            key={index}
            className={`border-secondary-01 flex flex-col mb-6 lg:mb-0 w-1/2 lg:w-1/4 gap-2 [&:nth-child(2n+1)]:border-r-[1px] lg:[&:not(:nth-last-child(-n+1))]:border-r-[1px]`}
          >
            <img
              src={categoriesInfo.image[index]}
              alt=""
              className="block object-contain h-60 md:h-80 p-2"
            />
            <Link
              to="/"
              className="text-center text-black hover:text-black text-xl md:text-2xl"
            >
              {categoriesInfo.title[index]}
            </Link>
            <div className="flex flex-col gap-2">
              {categoriesInfo.categories[index].map((item, index) => (
                <div
                  key={index}
                  className={`px-1 sm:px-4 text-xs sm:text-lg  ${
                    index === 0 && "mt-2"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex gap-3 text-black items-center hover:text-primary-02"
                  >
                    <span>
                      <StarIcon className="md:w-5 md:h-5 w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
