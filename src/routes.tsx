import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Blog from "./pages/Blog/Blog";
import Store from "./pages/Store/Store";
import BestSellers from "./pages/SalePage/SalePage";
import Contact from "./pages/Contact/Contact";
import Sitemap from "./pages/PayResult/Success";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import Cameras from "./pages/Categories/Cameras";
import Electronics from "./pages/Categories/Electronics";
import Televisions from "./pages/Categories/Televisions";
import JBLSpeakers from "./pages/Categories/JBLSpeakers";
import Smartphones from "./pages/Categories/Smartphones";
import Login from "./components/Account/LogIn";
import SignUp from "./components/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import NewArrivalPage from "./pages/NewArrival/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <Error />,
  },
  {
    path: "/store",
    element: <Store />,
    errorElement: <Error />,
  },
  {
    path: "/best-sellers",
    element: <BestSellers />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <Error />,
  },
  {
    path: "/new-arrivals",
    element: <NewArrivalPage />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
    errorElement: <Error />,
  },
  {
    path: "/home/electronics",
    element: <Electronics />,
    errorElement: <Error />,
  },
  {
    path: "/home/televisions",
    element: <Televisions />,
    errorElement: <Error />,
  },
  {
    path: "/home/cameras",
    element: <Cameras />,
    errorElement: <Error />,
  },
  {
    path: "/home/smartphones",
    element: <Smartphones />,
    errorElement: <Error />,
  },
  {
    path: "/home/JBLSpeakers",
    element: <JBLSpeakers />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
]);
