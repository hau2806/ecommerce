import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const navLinks = [
  {
    name: "Electronics",
    icon: ArrowForwardIcon,
    link: "/home/electronics",
    hasExtra: true,
  },
  {
    name: "Televisions",
    icon: ArrowForwardIcon,
    link: "/home/televisions",
    hasExtra: true,
  },
  {
    name: "Smartphones",
    icon: ArrowForwardIcon,
    link: "/home/smartphones",
    hasExtra: false,
  },
  {
    name: "Cameras",
    icon: ArrowForwardIcon,
    link: "/home/cameras",
    hasExtra: false,
  },
  {
    name: "JBL Speakers",
    icon: ArrowForwardIcon,
    link: "/home/JBLSpeakers",
    hasExtra: false,
  },
];

const SidebarList = () => {
  const SidebarExtra = [
    [
      {
        name: "Office Appliance",
        lists: ["Computers", "Headphones", "Air Conditioner"],
      },
      {
        name: "Kitchen Appliance",
        lists: ["Microwave", "Refrigerator", "Oil Heater"],
      },
      {
        name: "Cameras",
        lists: ["Digital Camera", "Animation Camera", "Action Camera"],
      },
    ],
    [
      { name: "Sport Watch", lists: [] },
      { name: "Digital Watch", lists: [] },
      { name: "Leather Watch", lists: [] },
    ],
  ];

  const [showExtra, setShowExtra] = useState(-1);
  const extraRef = useRef<HTMLDivElement>(null);

  const atMouseEnter = (index: number) => {
    setShowExtra(index);
  };

  const atMouseLeave = (event: React.MouseEvent, index: number) => {
    const isHoveringExtra = extraRef.current?.contains(event.target as Node);
    if (!isHoveringExtra) {
      setShowExtra(-1);
    } else {
      setShowExtra(index);
    }
  };

  return (
    <Fragment>
      <div className="flex bg-white border-[2px] border-secondary-01 flex-col rounded-md items-center justify-between">
        <div className="py-3 px-4 bg-primary-01 w-full h-full rounded-t-[4px] mb-[1px] text-white">
          <p className="font-bold">SHOP BY CATEGORY</p>
        </div>
        <div className="w-full">
          {navLinks.map((navLink, index) => (
            <div
              key={index}
              className={`flex justify-between relative w-full px-4 py-1 cursor-pointer duration-1000 hover:duration-1000 hover:text-primary-02 ${
                index !== navLinks.length - 1 && `border-b-[1px] border-[#ccc]`
              }`}
              onMouseEnter={() => atMouseEnter(index)}
              onMouseLeave={(event) => atMouseLeave(event, index)}
              onClick={() => <Link to={navLink.link} />}
            >
              <div className="flex gap-3 py-2 items-center items-middle">
                <ArrowRightIcon className="w-[14px] h-[14px]" />
                <Link
                  to={navLink.link}
                  className="hover:no-underline hover:text-primary-02"
                >
                  {navLink.name}
                </Link>
              </div>
              <div className="flex items-center">
                {navLink.hasExtra && (
                  <ChevronRightIcon className="w-[20px] h-[20px]" />
                )}
              </div>
              <div
                className={`transition-all duration-700 border-[1px] border-gray-400 ${
                  index === showExtra && navLink.hasExtra
                    ? `${`absolute opacity-100 z-20 right-0 top-[-1px] translate-x-full bg-white flex transition-opacity duration-700`}`
                    : `opacity-0 absolute -translate-x-[200%] flex top-[-1px] z-0 bg-transparent transition-opacity duration-700`
                }`}
              >
                {navLink.hasExtra &&
                  SidebarExtra[index].map((extra, index) => (
                    <div
                      key={index}
                      className="py-3 px-4 basis-1/3 min-w-[200px]"
                    >
                      <div className="border-b-2 pb-1 border-[#ccc] text-nowrap text-black hover:text-black">
                        {extra.name}
                      </div>
                      <div>
                        {extra.lists.map((list, index) => (
                          <Link
                            to={`/`}
                            key={index}
                            className="block py-1 hover:no-underline text-black hover:text-primary-02 text-nowrap"
                          >
                            {list}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarList;
