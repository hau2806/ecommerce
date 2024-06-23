import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdsWatchesSale = () => {
  const [countdown, setCountdown] = useState(12000);
  const [dealEnded, setDealEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer);
          setDealEnded(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" : ""}${hours} : ${
      minutes < 10 ? "0" : ""
    }${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full lg:w-1/2 relative">
      <div className="relative">
        <div className="absolute inset-0 bg-primary-01 opacity-50 rounded-xl"></div>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/189828127423765.6141abb1ec816.jpg"
          alt="Apple Watch"
          className="rounded-xl"
        />
        {dealEnded ? (
          <div className="absolute top-[40%] text-4xl right-[25%] text-primary-03 font-thin">
            Deal has ended
          </div>
        ) : (
          <div className="absolute min-w-fit text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EEF7FF]">
            <h2 className="text-xl md:text-3xl mb-4 md:mb-16 font-medium tracking-wide text-nowrap">
              Apple Watch Series 7
            </h2>
            <h2 className="uppercase md:text-6xl font-light text-nowrap">
              Pre - order
            </h2>
            <p className="mt-3 text-xl md:text-3xl tracking-wider">
              {formatTime(countdown)}
            </p>
            <Link
              to="/products/12"
              className="bg-primary-01 block text-[#EEF7FF] rounded-md py-2 px-8 w-fit hover:bg-primary-03 transition-all duration-300 mx-auto tracking-wider mt-3 text-xl capitalize font-light"
            >
              See more
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdsWatchesSale;
