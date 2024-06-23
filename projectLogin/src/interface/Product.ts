export interface ProductProps {
  id?: number | string;
  name: string;
  decription: string;
  color: string;
  size: string;
  branch: string;
  price: number;
  discount: {
    is_discount: boolean;
    price_discount: string;
  };
  images_list: string[];
  best_seller: boolean;
  new_arriver: boolean;
}
