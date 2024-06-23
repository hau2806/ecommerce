// import Grid from "@mui/material/Grid";
// import React, { Fragment } from "react";
// import Logo from "../../assets/image/LOOP-logo (2).png";
import { Link } from "react-router-dom";
// import paymentMethod from "../../assets/image/paymentMethod.png";
import { Fragment, useState } from "react";
import Logo from "../../assets/image/LOOP-logo (2).png";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  GiftIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  MegaphoneIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import paymentMethod from "../../assets/image/paymentMethod.png";
import { ToastContainer, toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const emailInfo = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setEmail("");
      toast("Your email has been saved!");
    } else {
      alert("Please enter a valid email");
    }
  };

  const footerInfo = [
    {
      name: "Information",
      lists: ["Contact Us", "Sitemap", "Stores", "Login", "My Account"],
    },
    {
      name: "Our Company",
      lists: ["Price Drop", "New Products", "Best Sales", "Sitemap", "Store"],
    },
    {
      name: "Quick Links",
      lists: [
        "About Us",
        "New Products",
        "Best Sales",
        "Contact Us",
        "Sitemap",
      ],
    },
    {
      name: "Policies & Info",
      lists: [
        "Delivery",
        "Legal Notice",
        "Terms and Condition Of Use",
        "About Us",
        "Secure Payment",
      ],
    },
  ];

  return (
    <Fragment>
      <div className="bg-primary-01 mt-20">
        <div className=" flex flex-col gap-8 lg:flex-row w-full xl:w-[90%] px-1 sm:px-5 py-8 md:py-10 justify-between mx-auto">
          <div className="w-[90%] md:w-3/5 lg:w-[30%] max-lg:mx-auto p-4 bg-white flex flex-col gap-3 rounded-lg">
            <div className="flex gap-4 items-center border-b-2 pb-2 border-b-primary-01 min-h-20">
              <GlobeAmericasIcon className="w-16 h-16 text-primary-01" />
              <p className="text-uppercase text-3xl font-bold text-primary-01">
                Find Us
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <MapPinIcon className="w-5 h-5 text-primary-01" />
              <p>17 Duy Tan, Cau Giay, Ha Noi</p>
            </div>
            <div className="flex gap-3 items-center">
              <PhoneIcon className="w-5 h-5 text-primary-01" />
              <p>0123-456-789</p>
            </div>
            <div className="flex gap-3 items-center">
              <ChatBubbleLeftIcon className="w-5 h-5 text-primary-01" />
              <p className="break-words">Sales@Company.com</p>
            </div>
          </div>
          <div className="w-[90%] md:w-3/5 lg:w-[30%] max-lg:mx-auto p-4 bg-white flex flex-col gap-3 rounded-lg">
            <div className="flex gap-4 items-center border-b-2 pb-2 border-b-primary-01 min-h-20">
              <EnvelopeIcon className="w-16 h-16 text-primary-01" />
              <p className="text-uppercase text-3xl font-bold text-primary-01 w-fit">
                Daily Updates
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-wrap">Sign Up And Get A Voucher Up To $250</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-primary-01 px-2 py-1 rounded-lg focus:outline-none focus:border-primary-02"
                />
                <button onClick={emailInfo}>
                  <PaperAirplaneIcon className="w-5 h-5 text-primary-01 hover:text-primary-02" />
                </button>
                <ToastContainer autoClose={1200} />
              </div>
            </div>
          </div>
          <div className="w-[90%] md:w-3/5 lg:w-[30%] max-lg:mx-auto p-4 gap-3 bg-white flex flex-col rounded-lg">
            <div className="flex gap-4 items-center border-b-2 pb-2 border-b-primary-01">
              <MegaphoneIcon className="w-16 h-16 text-primary-01" />
              <p className="text-uppercase text-3xl font-bold text-primary-01 w-fit">
                Best Offers
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex mx-auto gap-4">
                <GiftIcon className="w-8 h-8 text-red-600" />
                <GiftIcon className="w-8 h-8 text-primary-03" />
                <GiftIcon className="w-8 h-8 text-primary-02" />
              </div>
              <p className="text-wrap">
                Some of the best offer around the year just for you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap xl:w-[90%] px-1 sm:px-5 py-5 mx-auto">
        {Array.from({ length: footerInfo.length }, (_, index) => (
          <div
            key={index}
            className="w-full px-5 md:w-1/2 lg:w-1/4 max-sm:mx-6 max-md:mx-12 max-md:border-b-2 max-md:border-b-secondary-01 md:[&:nth-child(2n+1)]:border-r-2 lg:[&:not(:nth-last-child(-n+1))]:border-r-[2px] mb-4"
          >
            <p className="font-semibold text-2xl">{footerInfo[index].name}</p>
            <div className="py-3 flex flex-col gap-2">
              {footerInfo[index].lists.map((item, index) => (
                <p key={index} className="italic">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 justify-between w-full xl:w-[90%] mx-auto px-5 py-5 items-center relative">
          <div className="flex text-white">
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fas fa-rss"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-vimeo-v"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <img src={Logo} alt="/" className="w-30%" />
          <Link to="/payment" className="">
            <div className=" gap-6">
              <img
                className="object-cover w-[300px]"
                src={paymentMethod}
                alt="/"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="p-4 w-full xl:w-[1280px] text-center mx-auto">
        <a href="/" className="block hover:text-primary-02">
          &copy; 2024 - Ecommerce software by TheTeam<sup>TM</sup>
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
