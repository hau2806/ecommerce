import React, { Fragment, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Link } from "react-router-dom";
import Footer from "../../components/Header_Footer/Footer";
import ProductList from "../../components/BestSeller_NewArrival-Product/Product";

const SearchResult = () => {
  const { searchProducts } = useSelector((state: RootState) => state.loopStore);
  const [displayCount, setDisplayCount] = useState(6);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 6);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="px-3 py-10 flex flex-col items-center">
        <h2 className="text-4xl my-2 text-center capitalize text-primary-03 font-semibold tracking-normal">
          Search result
        </h2>
        <p className="text-center text-[16px] mb-4 font-thin">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        {searchProducts.length === 0 ? (
          <p className="mt-6 mb-12 text-primary-03">
            OMG! No results for your search...
          </p>
        ) : (
          <Fragment>
            {searchProducts.slice(0, displayCount).map((product, index) => {
              return (
                <section
                  key={index}
                  className="text-gray-600 body-font overflow-hidden"
                >
                  <div className="container px-5 py-10 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                      <div className="py-8 flex items-center gap-12">
                        <div className="block capitalize relative h-48 rounded overflow-hidden">
                          <img
                            alt={product.name}
                            className="object-contain w-[150px] object-center block"
                            src={product.images_list[0]}
                          />
                        </div>
                        <div className="md:flex-grow">
                          <h5 className="capitalize font-thin text-xl text-gray-900 title-font mb-2">
                            {product.branch}
                          </h5>
                          <h5 className="capitalize text-xl font-medium text-gray-900 title-font mb-2">
                            {product.name}
                          </h5>
                          <p className="text-md font-medium text-gray-900 title-font mb-2">
                            {product.decription.length > 90
                              ? product.decription.substring(0, 90) + "..."
                              : product.decription}
                          </p>
                          <p className="text-xl font-medium text-primary-01 leading-relaxed">
                            $ {product.price}
                          </p>
                          <Link
                            to={`/products/${product.id}`}
                            className="inline-flex text-center w-[30%] justify-center mt-2 text-white bg-primary-01 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
            {searchProducts.length > displayCount && (
              <button
                className="mt-4 text-white uppercase font-medium text-[14px] bg-primary-03 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded-2xl"
                onClick={handleLoadMore}
              >
                Load More...
              </button>
            )}
          </Fragment>
        )}
      </div>
      <ProductList />
      <Footer />
    </Fragment>
  );
};

export default SearchResult;
