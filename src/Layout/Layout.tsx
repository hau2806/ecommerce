import { Fragment, ReactNode, useEffect, useState } from "react";
import SidebarList from "../components/Sidebar/SidebarList";
import SidebarProduct from "../components/Sidebar/SidebarProduct";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const updateUI = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 900) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    updateUI();
    window.addEventListener("resize", updateUI);

    return () => {
      window.removeEventListener("resize", updateUI);
    };
  });
  return (
    <Fragment>
      <div className="bg-white flex text-black overflow-hidden gap-8 lg:gap-10 xl:gap-15 px-4 py-3 lg:p-3 w-full xl:w-[1280px] mx-auto mt-4">
        {!hidden ? (
          <Fragment>
            <div className="w-2/6">
              <SidebarList />
            </div>
            <div className="w-4/6">
              <SidebarProduct />
            </div>
          </Fragment>
        ) : (
          <div className="w-full">
            <SidebarProduct />
          </div>
        )}
      </div>
      <div className="max-w-full px-4 py-3 lg:p-3 overflow-hidden xl:w-[1280px] mx-auto">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
