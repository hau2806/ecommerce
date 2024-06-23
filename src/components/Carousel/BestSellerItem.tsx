import { useSelector } from "react-redux";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const BestSellerItem = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const bestSellerInfo: {
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
    title: "Best Seller Item",
    itemNames: [],
    prices: [],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 1,
    itemId: [],
  };
  products.map((product) => {
    bestSellerInfo.images.push(product.images_list[0]);
    bestSellerInfo.itemNames.push(product.name);
    bestSellerInfo.prices.push(product.price);
    bestSellerInfo.itemId.push(Number(product.id));
  });
  // console.log(bestSellerInfo);
  return (
    <CarouselDefault
      images={bestSellerInfo.images}
      itemNames={bestSellerInfo.itemNames}
      prices={bestSellerInfo.prices}
      redirectButtons={bestSellerInfo.redirectButtons}
      redirectLinks={bestSellerInfo.redirectLinks}
      title={bestSellerInfo.title}
      id={bestSellerInfo.id}
      blogDescription={bestSellerInfo.blogDescriptions}
      itemId={bestSellerInfo.itemId}
    />
  );
};

export default BestSellerItem;
