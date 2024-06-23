import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const ButtonScroll = () => {
  return (
    <div className="fixed left-20 right-2 z-20 hidden md:flex flex-col gap-2">
      <Link to="/">
        <div className="bg-primary-01 w-16 h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <AiOutlineArrowUp className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <AiOutlineArrowUp className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonScroll;
