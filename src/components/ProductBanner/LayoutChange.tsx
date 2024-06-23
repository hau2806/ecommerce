import React, { useEffect, useState } from "react";
// import { BsGridFill } from "react-icons/bs";
// import { ImList } from "react-icons/im";
// import { GoTriangleDown } from "react-icons/go";
import { Squares2X2Icon } from "@heroicons/react/20/solid";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

interface ProductBannerProps {
  itemsPerPageFromBanner: (itemsPerPage: number) => void;
}

const LayoutChange: React.FC<ProductBannerProps> = ({
  itemsPerPageFromBanner,
}) => {
  const [gridViewActive, setGridViewActive] = useState<boolean>(true);
  const [listViewActive, setListViewActive] = useState<boolean>(false);

  useEffect(() => {
    const gridView = document.querySelector<HTMLElement>(".gridView");
    const listView = document.querySelector<HTMLElement>(".listView");

    const handleGridClick = () => {
      setListViewActive(false);
      setGridViewActive(true);
    };

    const handleListClick = () => {
      setGridViewActive(false);
      setListViewActive(true);
    };

    if (gridView && listView) {
      gridView.addEventListener("click", handleGridClick);
      listView.addEventListener("click", handleListClick);

      // Clean up the event listeners when the component unmounts
      return () => {
        gridView.removeEventListener("click", handleGridClick);
        listView.removeEventListener("click", handleListClick);
      };
    }
  }, [gridViewActive, listViewActive]);

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* Left Part */}
      <div className="flex items-center gap-4">
        <span
          className={`${
            gridViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView`}
        >
          <Squares2X2Icon />
        </span>
        <span
          className={`${
            listViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
        >
          <FormatListBulletedIcon />
        </span>
      </div>
      {/* Right Part */}
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        {/* Sort by */}
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by:</label>
          <select
            id="countries"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="Best Sellers">Best Sellers</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Featured">Featured</option>
            <option value="Final Offer">Final Offer</option>
          </select>
          <span className="absolute text-sm right-2 md:right-4 top-2.5">
            {/* <GoTriangleDown /> */}
          </span>
        </div>

        {/* Show */}
        <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="block">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(Number(e.target.value))}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-sm right-3 top-2.5">
            {/* <GoTriangleDown /> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LayoutChange;
