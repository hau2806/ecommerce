import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import Grid from "@mui/material/Grid";

const SaleProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);
  const [displayCount, setDisplayCount] = useState(8);
  const discountedProducts = products.filter(
    (product) => product.discount && product.discount.is_discount
  );

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 8);
  };

  return (
    <div className="mx-auto pb-20 pt-6">
      <h1 className="text-4xl capitalize my-3 text-center text-primary-01 font-semibold tracking-wide">
        <span className="text-[#FC7636]">Big </span> sale
      </h1>
      <p className="text-center text-[16px] mb-4 font-thin">
        Join with us to buy with good prices!
      </p>
      <div className="col-span-3">
        <section className="text-gray-600 body-font">
          <div className="py-2 mx-auto">
            <Grid container spacing={6} width="80%" margin="auto">
              <Fragment>
                {discountedProducts
                  .slice(0, displayCount)
                  .map((product, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Link
                        to={`/products/${product.id}`}
                        className="w-full border-primary-01 text-center mb-2 cursor-pointer p-3 block"
                      >
                        <div className="capitialize relative ">
                          <img
                            alt={product.name}
                            className="object-contain object-center w-full h-full"
                            src={product.images_list[0]}
                          />
                          {product.discount && product.discount.is_discount && (
                            <div className="absolute m-2 top-0 left-0 bg-primary-03 rounded-lg text-[12px] text-white px-1 py-1">
                              {product.discount.price_discount}
                            </div>
                          )}
                        </div>
                        <div className="mt-3">
                          <p className="capitalize mb-2 text-gray-700 title-font text-lg font-thin">
                            {product.branch}
                          </p>
                          <h2 className="capitalize text-gray-900 title-font text-lg font-medium truncate">
                            {product.name}
                          </h2>
                          <p className="mt-1 text-md my-2 font-semibold">
                            $ {product.price}
                          </p>
                          <button className="inline-flex text-center w-[80%] justify-center mt-2 text-white bg-primary-01 border-0 py-2 px-3  focus:outline-none hover:bg-opacity-90 rounded">
                            View Details
                          </button>
                        </div>
                      </Link>
                    </Grid>
                  ))}
              </Fragment>
            </Grid>
            {displayCount < discountedProducts.length && (
              <div className="text-center mt-4">
                <button
                  className="mt-4 text-white uppercase font-medium text-[14px] bg-primary-03 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded-2xl"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SaleProduct;
