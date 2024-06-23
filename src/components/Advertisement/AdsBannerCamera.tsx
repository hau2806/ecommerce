import { Link } from "react-router-dom";
import { Fragment } from "react";

const AdsBannerCamera = () => {
  return (
    <Fragment>
      <Link
        to="/products/33"
        className="block w-1/2 max-lg:scale-100 transition scale-95 hover:scale-100"
      >
        <img
          className="w-full rounded-xl"
          src="https://www.ringke.com/site/data/file/item/default/1601946038_1PVQgEhu"
          alt=""
        />
      </Link>
    </Fragment>
  );
};

export default AdsBannerCamera;
