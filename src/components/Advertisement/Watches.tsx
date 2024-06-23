import { Link } from "react-router-dom";
import { Fragment } from "react";
import AdsImg2 from "../../assets/image/right-banner-home.jpeg";

const Watches = () => {
  return (
    <Fragment>
      <div className="max-w-[15%] text-center">
        <div className="relative overflow-hidden block">
          <img
            src="https://m.media-amazon.com/images/I/71XlKHSN6hL._AC_SY395_.jpg"
            alt=""
            className="align-middle"
          />
          <div className="absolute left-0 right-0 bottom-6 text-center z-10 text-white flex flex-col">
            <span>Toe Booties</span>
            <Link
              to={"/best-sellers"}
              className="hover:no-underline text-black border-[1px] border-black bg-white rounded-[10px] p-2 block w-fit text-center m-auto"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Watches;
