import { useSelector } from "react-redux";

import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const LastestBlog = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const lastestBlogInfo: {
    images: string[];
    title: string;
    itemNames: string[];
    prices: number[];
    redirectButtons: string[];
    redirectLinks: string[];
    blogDescriptions: string[];
    id: number;
    itemId: number[];
  } = {
    images: [],
    title: "Lastest Blogs",
    itemNames: [],
    prices: [],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 5,
    itemId: [],
  };
  products.map((product) => {
    lastestBlogInfo.images.push(product.images_list[0]);
    lastestBlogInfo.itemNames.push(product.name);
    lastestBlogInfo.blogDescriptions.push(product.decription);
  });

  return (
    <CarouselDefault
      images={lastestBlogInfo.images}
      itemNames={lastestBlogInfo.itemNames}
      prices={lastestBlogInfo.prices}
      redirectButtons={lastestBlogInfo.redirectButtons}
      redirectLinks={lastestBlogInfo.redirectLinks}
      title={lastestBlogInfo.title}
      id={lastestBlogInfo.id}
      blogDescription={lastestBlogInfo.blogDescriptions}
      itemId={lastestBlogInfo.itemId}
    />
  );
};

export default LastestBlog;
