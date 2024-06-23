import { useSelector } from "react-redux";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const CategoriesProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const categoriesProductInfo: {
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
    title: "Category Products",
    itemNames: [],
    prices: [],
    redirectButtons: ["ELECTRONICS", "CAMERAS", "SMART-WATCHES"],
    redirectLinks: ["/home/electronics", "/home/cameras", "/home/smartphones"],
    blogDescriptions: [],
    id: 3,
    itemId: [],
  };
  products.map((product) => {
    categoriesProductInfo.images.unshift(product.images_list[0]);
    categoriesProductInfo.itemNames.unshift(product.name);
    categoriesProductInfo.prices.unshift(product.price);
  });

  return (
    <CarouselDefault
      images={categoriesProductInfo.images}
      itemNames={categoriesProductInfo.itemNames}
      prices={categoriesProductInfo.prices}
      redirectButtons={categoriesProductInfo.redirectButtons}
      redirectLinks={categoriesProductInfo.redirectLinks}
      title={categoriesProductInfo.title}
      id={categoriesProductInfo.id}
      blogDescription={categoriesProductInfo.blogDescriptions}
      itemId={categoriesProductInfo.itemId}
    />
  );
};

export default CategoriesProduct;
