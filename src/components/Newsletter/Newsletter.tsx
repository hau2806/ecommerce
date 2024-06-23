import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="relative">
      <img
        src="https://i.pinimg.com/originals/5b/39/eb/5b39ebb20d044726686e31cde13cf03e.jpg"
        alt="Newsletter background"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="relative z-10 w-full lg:w-[90%]  flex px-5 py-2 justify-between font-medium text-white mx-auto transition-all duration-300">
        <Link to="/signup" className="text-xs md:text-base text-white">
          <span className="hidden md:inline-block">Welcome - </span> Sign Up Now
          & Get 25% Off
        </Link>
        <p className="text-xs md:text-base text-white">
          <a href="tel: +123456789" className="hover:text-white">
            Call <span className="hidden md:inline-block">The Expert -</span>
            <span className="inline-block md:hidden">Us:</span> 123 456 789
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
