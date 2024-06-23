import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect } from "react";

const ProductList = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const slicedProducts = products.slice(9, 21);

  console.log(slicedProducts);
  useEffect(() => {
    slicedProducts.map((product) => {
      console.log(product.id);
    });
  }, [slicedProducts]);

  return (
    <div className="mx-auto pb-24 pt-12 border border-t-gray">
      <h3 className="text-3xl uppercase font-medium text-center mb-10">
        Some popular items...
      </h3>
      <div className="col-span-3">
        <section className="text-gray-600 body-font">
          <div className="mx-auto">
            <div className="flex flex-wrap w-[80%] mx-auto">
              {slicedProducts.map((product, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                  <Link
                    to={`/products/${product.id}`}
                    className="w-full border-primary-01 text-center mb-10 px-7 block"
                    reloadDocument
                  >
                    <div className="capitialize block capitalize relative overflow-hidden">
                      <img
                        alt={product.name}
                        className="object-contain object-center w-full h-full block"
                        src={product.images_list[0]}
                      />
                    </div>
                    <div className="mt-3">
                      <p className="capitalize mb-2 text-gray-700 title-font text-lg font-thin tracking-wider">
                        {product.branch}
                      </p>
                      <h2 className="capitalize text-gray-900 title-font text-lg font-medium truncate">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-md my-2 font-semibold">
                        $ {product.price}
                      </p>
                      <button className="inline-flex text-center w-[60%] justify-center mt-2 text-white bg-primary-01 border-0 py-2 px-3  focus:outline-none hover:bg-opacity-90 rounded">
                        View Details
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
