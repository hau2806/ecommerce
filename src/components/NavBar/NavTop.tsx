import React, { Fragment, useEffect, useRef, useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Link, useNavigate } from "react-router-dom";
import logoLoop from "../../assets/image/LOOP-logo (2).png";
import { FaHeart, FaSearch, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { setProductSearch } from "../../Redux/ProductSlice";
import {
  ShoppingBagIcon,
  Bars3Icon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import {
  BanknotesIcon,
  GiftIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";

interface ProductProps {
  image: string | undefined;
  id?: number;
  name: string;
  decription: string;
  color: string;
  size: string;
  branch: string;
  price: number;
  discount: {
    is_discount: boolean;
    price_discount: string;
  };
  images_list: string[];
  best_seller: boolean;
  new_arriver: boolean;
  quantity?: number;
  shipping?: boolean;
}
const NavTop = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);
  const productCart = useSelector(
    (state: RootState) => state.loopStore.addToCart
  );
  // console.log(productCart);
  const productsWishList = useSelector(
    (state: RootState) => state.loopStore.addToWishlist
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const dropdownDivRef = useRef<HTMLDivElement>(null);
  const dropdownInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownDivRef.current &&
        dropdownInputRef.current &&
        !dropdownDivRef.current.contains(event.target as Node) &&
        !dropdownInputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  const toggleSearch = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
    setIsSearchOpen(false);
  };

  const navigate = useNavigate();
  // console.log(renderUser);
  const renderAccount = () => {
    const storedValueAcc = window.sessionStorage.getItem("username");
    const storedValueGG = window.sessionStorage.getItem("usernameGG");

    if (storedValueAcc) {
      return `Hi, ${storedValueAcc}`;
    } else if (storedValueGG) {
      return `Hi, ${storedValueGG}`;
    } else {
      return "Name";
    }
  };
  const userNameAccount = renderAccount();
  // console.log(userNameAccount);
  const handleLogOut = () => {
    const isConfirm = confirm("Do you want to log out?");
    if (isConfirm) {
      window.sessionStorage.clear();
      window.location.reload();
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  // search
  const [inputValue, setInputValue] = useState("");

  function searchProduct(products: ProductProps[], inputValue: string) {
    if (inputValue.trim() === "") {
      return [];
    }
    const keyword = inputValue.trim().replace(/\s+/g, "").toLowerCase();
    return products.filter((product) => {
      return (
        product.name
          ?.trim()
          ?.replace(/\s+/g, "")
          .toLowerCase()
          .indexOf(keyword) !== -1 ||
        product.branch
          ?.trim()
          ?.replace(/\s+/g, "")
          .toLowerCase()
          .indexOf(keyword) !== -1
      );
    });
  }
  const handleSearch = () => {
    const results = searchProduct(products, inputValue);
    dispatch(setProductSearch(results));

    navigate("/search");
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  return (
    <Fragment>
      <Newsletter />
      <nav className="bg-gray-100 px-5 border-gray-200 boder border-b">
        <div className=" text-primary-01 flex lg:w-[90%] py-4 flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={logoLoop}
              className="w-[80px] md:w-[120px] transition-all duration-300"
              alt=""
            />
          </Link>
          <form className="hidden md:block md:w-1/2">
            <label
              id="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full py-3 md:py-4 px-3 text-sm text-gray-900 border-2 border-primary-01 rounded-lg bg-gray-50 outline-none focus:border-primary-03 transition-all duration-500"
                placeholder="Search products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                required
              />

              <button
                onClick={handleSearch}
                type="button"
                className="text-white flex items-center gap-3 absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary-01 hover:bg-primary-03 focus:ring-2 focus:ring-primary-03 font-medium rounded-lg text-sm px-3 py-2 transition-all duration-300"
              >
                <FaSearch />
                <span className="hidden md:block">Search</span>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-5 relative">
            <div className="flex justify-center items-center">
              <button className="text-xl" onClick={toggleDropdown}>
                <FaUserAlt className="hover:text-primary-03 transition-all duration-300" />
              </button>
            </div>
            <div
              className={`z-20 absolute w-48 top-0 right-0 ${
                isDropdownOpen
                  ? "translate-y-12 md:translate-y-[60px] opacity-100"
                  : "-translate-y-96 opacity-0"
              } bg-white  border-primary-01 border-2 rounded-lg shadow transition-all duration-700`}
              id="user-dropdown"
              ref={dropdownDivRef}
            >
              <div className="px-4 py-3 border-b-2">
                <span className="block text-sm text-gray-900">
                  {renderAccount()}
                </span>
              </div>
              <ul className="">
                {userNameAccount === "Name" && (
                  <div>
                    <li>
                      <Link
                        onClick={handleLogin}
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleSignup}
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </div>
                )}
                <li>
                  <Link
                    onClick={handleLogOut}
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg transition-all duration-300"
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/cart">
              <div className="relative">
                <ShoppingBagIcon className="text-xl h-6 w-6 hover:text-primary-03 transition-all duration-300" />
                {productCart.length > 0 && (
                  <p className="absolute -top-1 right-1 bg-primary-03 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold translate-x-3">
                    {productCart.length}
                  </p>
                )}
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="relative">
                <FaHeart className="text-2xl h-6 w-6 hover:text-primary-03 transition-all duration-300" />
                {productsWishList.length > 0 && (
                  <p className="absolute -top-1 right-1 bg-primary-03 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold translate-x-3">
                    {productsWishList.length}
                  </p>
                )}
              </div>
            </Link>
            <form className="z-30 md:hidden block">
              <FaSearch
                className="h-5 w-5 cursor-pointer hover:text-primary-03 transition-all duration-300"
                onClick={toggleSearch}
              />
              <div ref={dropdownDivRef}>
                <input
                  type="search"
                  id="default-search"
                  className={`block absolute top-0 right-0 ${
                    isSearchOpen
                      ? "translate-y-12 md:translate-y-[60px] opacity-100"
                      : "-translate-y-96 opacity-0"
                  } py-3 md:py-4 px-3 text-sm text-gray-900 border-2 border-primary-01 rounded-lg bg-gray-50 outline-none focus:border-primary-03 transition-all duration-700`}
                  placeholder="Search products..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  required
                  ref={dropdownInputRef}
                />
              </div>
            </form>
            <div
              className="flex justify-center items-center font-black md:hidden"
              onClick={toggleMenu}
            >
              <Bars3Icon className="w-5 h-5 cursor-pointer hover:text-primary-03 transition-all duration-300" />
            </div>
            <div
              ref={dropdownDivRef}
              className={`text-primary-01 bg-white absolute z-30 right-0 top-0 min-w-48 rounded-lg border-primary-01 border-2 flex flex-col items-center justify-between mx-auto transition-all duration-700 ${
                isMenuOpen
                  ? "translate-y-12 md:translate-y-[60px] opacity-100"
                  : "-translate-y-96 opacity-0"
              }`}
            >
              <Link
                to="/"
                className="flex items-center text-lg gap-3 p-5 w-full text-primary-01 transition-all duration-300 hover:text-white hover:bg-primary-01 hover:rounded-t-md"
                reloadDocument
              >
                <span>
                  <HomeIcon className="w-6 h-6" />
                </span>{" "}
                Home
              </Link>

              <Link
                to="/all-items"
                className="flex items-center text-lg gap-3 p-5 w-full text-primary-01 transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                <span>
                  <ShoppingCartIcon className="w-6 h-6" />
                </span>{" "}
                Shop
              </Link>

              <Link
                to="/sale"
                className="flex items-center text-lg gap-3 p-5 w-full text-primary-01 transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                <span>
                  <GiftIcon className="w-6 h-6" />
                </span>{" "}
                Sale
              </Link>

              <Link
                to="/payment"
                className="flex items-center text-lg gap-3 p-5 w-full text-primary-01 transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                <span>
                  <BanknotesIcon className="w-6 h-6" />
                </span>{" "}
                Payment
              </Link>

              <Link
                to="/contact"
                className="flex items-center text-lg gap-3 p-5 w-full text-primary-01 transition-all duration-300 hover:text-white hover:bg-primary-01 hover:rounded-b-md"
              >
                <span>
                  <PhoneIcon className="w-6 h-6" />
                </span>{" "}
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavTop;
