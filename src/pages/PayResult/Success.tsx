import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const Success = () => {

  return (
    <Fragment>
      <div className="h-screen bg-primary-01 bg-gradient-to-t to-[#e2e2e2] from-[#76885B]">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
            <div className="max-w-[500px] p-4 py-10 bg-white mt-20 flex gap-4 flex-col items-center rounded-lg shadow-lg">
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/ok_check_yes_tick_accept_success-512.png"
                alt="emptyCart"
              />
              <h1 className="font-titleFont text-2xl mb-2 font-bold uppercase">
                Place Order Successfully!
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                Your Order lives to serve. Give it purpose - fill it with
                books, electronics, videos, etc. and make it happy.
              </p>
              <Link to="/all-items">
                <button className="bg-primeColor border border-primary-01 rounded cursor-pointer hover:bg-primary-01 active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-400 hover:text-white duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>

          <div className="firework-red" style={{ left: "50%", top: "20%" }}></div>
          <div className="firework-blue" style={{ left: "30%", top: "10%" }}></div>
          <div className="firework-yellow" style={{ left: "70%", top: "10%" }}></div>
          <div className="firework-red" style={{ left: "20%", top: "30%" }}></div>
          <div className="firework-blue" style={{ left: "80%", top: "30%" }}></div>
          <div className="firework-blue" style={{ left: "50%", top: "30%" }}></div>
          <div className="firework-blue" style={{ left: "40%", top: "30%" }}></div>
          <div className="firework-blue" style={{ left: "60%", top: "30%" }}></div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Success;
