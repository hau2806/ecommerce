import ImgProduct1 from "../../assets/image/new-product-1.jpeg";
import CarouselDefault from "../Carousel/Carousel";

const SidebarProduct = () => {
  const sidebarInfo = {
    images: [
      `${ImgProduct1}`,
      `${ImgProduct1}`,
      `${ImgProduct1}`,
      `${ImgProduct1}`,
      `${ImgProduct1}`,
      `${ImgProduct1}`,
      `${ImgProduct1}`,
      `${ImgProduct1}`,
    ],
    title: "New Product",
    itemNames: [
      "Lorem ipsum dolor1",
      "Lorem ipsum dolor2",
      "Lorem ipsum dolor3",
      "Lorem ipsum dolor4",
      "Lorem ipsum dolor5",
      "Lorem ipsum dolor6",
      "Lorem ipsum dolor7",
      "Lorem ipsum dolor8",
    ],
    prices: [12.9, 12.9, 28.72, 12.9, 12.9, 12.9, 12.9, 12.9],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 7,
  };
  return (
    <CarouselDefault
      images={sidebarInfo.images}
      itemNames={sidebarInfo.itemNames}
      prices={sidebarInfo.prices}
      redirectButtons={sidebarInfo.redirectButtons}
      redirectLinks={sidebarInfo.redirectLinks}
      title={sidebarInfo.title}
      id={sidebarInfo.id}
      blogDescription={sidebarInfo.blogDescriptions}
      isNewArrive={true}
    />
  );
};

export default SidebarProduct;
