import { useSelector } from "react-redux";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const TrendingProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const trendingProductInfo: {
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
    title: "Trending Product",
    itemNames: [],
    prices: [],
    redirectButtons: ["POPULAR ITEM", "NEW ARRIVAL"],
    redirectLinks: ["/all-items", "/sale"],
    blogDescriptions: [],
    id: 2,
    itemId: [],
  };
  products.map((product) => {
    trendingProductInfo.images.push(product.images_list[0]);
    trendingProductInfo.itemNames.push(product.name);
    trendingProductInfo.prices.push(product.price);
  });

  return (
    <CarouselDefault
      images={trendingProductInfo.images}
      itemNames={trendingProductInfo.itemNames}
      prices={trendingProductInfo.prices}
      redirectButtons={trendingProductInfo.redirectButtons}
      redirectLinks={trendingProductInfo.redirectLinks}
      title={trendingProductInfo.title}
      id={trendingProductInfo.id}
      blogDescription={trendingProductInfo.blogDescriptions}
      itemId={trendingProductInfo.itemId}
    />
  );
};

export default TrendingProduct;
