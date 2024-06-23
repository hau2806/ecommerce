import { useSelector } from "react-redux";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const SpecialProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const specialProductInfo: {
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
    title: "Special Product",
    itemNames: [],
    prices: [],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 4,
    itemId: [],
  };
  products.map((product) => {
    specialProductInfo.images.unshift(product.images_list[0]);
    specialProductInfo.itemNames.unshift(product.name);
    specialProductInfo.prices.unshift(product.price);
  });

  return (
    <CarouselDefault
      images={specialProductInfo.images}
      itemNames={specialProductInfo.itemNames}
      prices={specialProductInfo.prices}
      redirectButtons={specialProductInfo.redirectButtons}
      redirectLinks={specialProductInfo.redirectLinks}
      title={specialProductInfo.title}
      id={specialProductInfo.id}
      blogDescription={specialProductInfo.blogDescriptions}
      itemId={specialProductInfo.itemId}
    />
  );
};

export default SpecialProduct;
