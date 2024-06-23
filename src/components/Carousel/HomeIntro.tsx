import { IoMdCheckmark } from "react-icons/io";

const HomeIntro = () => {
  return (
    <div className="flex justify-between w-full xl:w-[90%] px-5 py-3 mx-auto cursor-pointer flex-col gap-3 md:flex-row">
      <div className="flex items-center">
        <IoMdCheckmark />
        <p className="text-xs sm:text-base md:text-md font-semibold ml-3">
          Offical Loop Shop{" "}
          <span className="font-light">over 1100 products online</span>
        </p>
      </div>
      <div className="flex items-center min-[460px]:max-md:justify-center">
        <IoMdCheckmark />
        <p className="text-xs sm:text-base md:text-md font-semibold ml-3">
          Free shipping and returns for{" "}
          <span className="font-light">member</span>
        </p>
      </div>
      <div className="flex items-center min-[460px]:max-md:justify-end">
        <IoMdCheckmark />
        <p className="text-xs sm:text-base md:text-md font-semibold ml-3">
          Same-day dispatch{" "}
          <span className="font-light">before 8pm (Mon-Fri)</span>
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
