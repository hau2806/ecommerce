import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import emptyCart from "../../assets/image/emptyCart.png";
import { AppDispatch, RootState } from "../../Redux/store";
import {
  deleteItem,
  resetCart,
  updateCartQuantity,
} from "../../Redux/ProductSlice";
import { FiPlus, FiMinus } from "react-icons/fi";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Product } from "../../ApiServices/Types";

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.loopStore.addToCart);
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>();
  const dispatch: AppDispatch = useDispatch();
  const hasDiscount = products.some(
    (product) => product.discount && product.discount.is_discount
  );

  useEffect(() => {
    let total = 0;
    products.forEach((item) => {
      if (item.discount && item.discount.is_discount) {
        const discountedPrice =
          item.price -
          (item.price * parseFloat(item.discount.price_discount)) / 100;
        total += discountedPrice * (item.quantity || 1);
      } else {
        total += item.price * (item.quantity || 1);
      }
    });

    setTotalAmt(total);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 300.0) {
      setShippingCharge(30);
    } else if (totalAmt <= 500.0) {
      setShippingCharge(20);
    } else if (totalAmt > 500.0) {
      setShippingCharge(10);
    }
  }, [totalAmt]);

  const handleIncrement = (id: number) => {
    dispatch(updateCartQuantity({ id, quantityChange: 1 }));
  };

  const handleDecrement = (id: number) => {
    dispatch(updateCartQuantity({ id, quantityChange: -1 }));
  };

  const handleDeleteSelectedItem = (product: Product) => {
    dispatch(deleteItem(product));
  };

  return (
    <Fragment>
      <NavBar />
      {products.length > 0 ? (
        <div className="h-screen overflow-x-hidden bg-gray-100 py-12 max-sm:px-8 lg:px-20 xl:px-32">
          {/* <h1 className="text-4xl mb-10 text-center capitalize text-primary-01 font-semibold tracking-normal">
            My Shopping Cart
          </h1> */}
          <div className="mx-auto max-w-6xl justify-center md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-full">
              {products.map((product) => (
                <div
                  key={product.id}
                  className=" mb-6 rounded-lg bg-white p-6 shadow-md sm:flex"
                >
                  <img
                    className="w-[15%]"
                    src={product.images_list[0]}
                    alt={product.name}
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-3 sm:mt-0">
                      <p className="capitalize text-gray-700 title-font text-md font-thin">
                        {product.branch}
                      </p>
                      <h2 className="text-xl capitalize font-bold text-primary-01">
                        {product.name}
                      </h2>
                      <p
                        className={`mt-1 font-semibold text-md ${
                          product.discount && product.discount.is_discount
                            ? "text-primary-03"
                            : "text-gray-700"
                        }`}
                      >
                        {product.discount && product.discount.is_discount ? (
                          <Fragment>
                            <span className="line-through text-gray-400 mr-3">
                              ${product.price}
                            </span>{" "}
                            $
                            {(
                              product.price -
                              (product.price *
                                parseFloat(product.discount.price_discount)) /
                                100
                            ).toFixed(2)}
                          </Fragment>
                        ) : (
                          `$${product.price}`
                        )}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border-gray-100">
                        <button
                          onClick={() => handleDecrement(product.id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-2 px-3 duration-100 hover:bg-primary-01 hover:text-blue-50"
                        >
                          <FiMinus />
                        </button>
                        <span className="border bg-white text-center font-semibold text-lg px-3 outline-none">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrement(product.id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-2 px-3 duration-100 hover:bg-primary-01 hover:text-blue-50"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <div
                        onClick={() =>
                          dispatch(() => handleDeleteSelectedItem(product))
                        }
                        className="ml-12 transition-all duration-200"
                      >
                        <FaTrashAlt className="text-primary-01 hover:text-primary-03 text-[20px] font-semibold" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between mt-4">
                <Link to="/all-items">
                  <button className="flex items-center rounded-lg py-2 px-2 border-2 outline-0 border-primary-01 gap-2 font-semibold text-m leading-8 text-primary-01 shadow-sm shadow-transparent transition-all duration-200 hover:shadow-primary-01 hover:bg-primary-03 hover:text-white hover:border-none">
                    <IoIosArrowBack className="text-[20px]" />
                    Continue Shopping
                  </button>
                </Link>
                <button
                  onClick={() => dispatch(resetCart())}
                  className="flex items-center px-3 py-2 gap-2 rounded border-none outline-0 font-medium text-lg leading-8 text-white shadow-sm shadow-transparent transition-all duration-200 hover:shadow-red-500 bg-primary-01 hover:bg-primary-03 hover:text-white"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex justify-between">
                <p className="text-lg font-medium text-primary-01">Subtotal</p>
                <p className="text-gray-700">${totalAmt.toFixed(2)}</p>
              </div>
              <div className="flex my-2 justify-between">
                <p className="text-md font-medium text-primary-01">Shipping</p>
                <p className="text-gray-700">${shippingCharge}</p>
              </div>
              {hasDiscount && (
                <div className="flex justify-between ">
                  <p className="text-md font-medium text-primary-01">
                    Discount
                  </p>
                  <p className="font-bold text-primary-03">
                    {products[0].discount.price_discount}
                  </p>
                </div>
              )}
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${(totalAmt + Number(shippingCharge)).toFixed(2)} USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link to="/payment">
                <button className="mt-6 w-full transition-all duration-200 hover:scale-110 rounded-md bg-primary-01 py-1.5 font-medium text-blue-50 hover:bg-primary-03">
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center mt-5 gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/all-items">
              <button className="bg-primeColor border border-primary-01 rounded cursor-pointer hover:bg-primary-01 active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-400 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
      <Footer />
    </Fragment>
  );
};

export default Cart;
