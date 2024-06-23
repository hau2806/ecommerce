import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";

const NavBar = () => {
  return (
    <Fragment>
      <NavTop />
      <nav className="bg-white border-gray-200 border-b hidden md:block shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
        <div className="text-primary-01 flex text-center flex-wrap items-center justify-between mx-auto">
          <ul className="flex mx-auto font-medium rounded-lg">
            <li>
              <Link
                to="/"
                className="block py-6 px-8 text-primary-01 rounded hover:rounded-none transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-items"
                className="block py-6 px-8 text-primary-01 rounded hover:rounded-none transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/sale"
                className="block py-6 px-8 text-primary-01 rounded hover:rounded-none transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className="block py-6 px-8 text-primary-01 rounded hover:rounded-none transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-6 px-8 text-primary-01 rounded hover:rounded-none transition-all duration-300 hover:text-white hover:bg-primary-01"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
