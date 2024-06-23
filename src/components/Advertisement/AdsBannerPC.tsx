import { Link } from "react-router-dom";
import { Fragment } from "react";

const AdsBannerPC = () => {
  return (
    <Fragment>
      <Link
        to="/products/7"
        className="block w-1/2 max-lg:scale-100 transition scale-95 hover:scale-100"
      >
        <img
          className="w-full rounded-xl"
          src="https://www.ringke.com/site/data/file/item/default/1601946104_7yepfQgb"
          alt=""
        />
      </Link>
    </Fragment>
  );
};

export default AdsBannerPC;
