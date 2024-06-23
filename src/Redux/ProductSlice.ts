import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


interface Product {
  image: string | undefined;
  id?: number;
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
  quantity?: number;
  shipping?: boolean;
}
interface ProductCart {
  image: string | undefined;
  id: number;
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
  quantity?: number;
  shipping?: boolean;
}

interface ProductReview {
  productId: number;
  userId: number;
  rating: number;
  comment: string;
  avatar: string;
  time: string;
  name: string;
}

interface BlogProps {
  postId: number;
  imgUrl: string;
  title: string;
  body: string;
}

interface ProductState {
  products: Product[];
  searchProducts: Product[];
  addToCart: ProductCart[];
  addToWishlist: Product[];
  reviews: ProductReview[];
  loading: boolean;
  error: string | null;
  product: Product | null;
  shipping: boolean;
  blogs: BlogProps[];
}

const initialState: ProductState = {
  products: [],
  searchProducts: [],
  addToCart: [],
  addToWishlist: [],
  loading: false,
  error: null,
  product: null,
  shipping: false,
  blogs: [],
  reviews: []
};


const productSlice = createSlice({
  name: "loopStore",
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.products = action.payload;
    },
    setProductSearch: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.searchProducts = action.payload;
    },
    setBlogs: (state, action: PayloadAction<BlogProps[]>) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    setReview: (state, action: PayloadAction<ProductReview[]>) => {
      state.loading = false;
      state.reviews = action.payload;
    },

    addToCart: (state, action: PayloadAction<ProductCart>) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.addToCart.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity =
          (existingProduct.quantity || 0) + (quantity || 1);
      } else {
        state.addToCart.push({ ...action.payload, quantity: quantity || 1 });
      }
      toast("Product added to cart");
    },

    addToWishList: (state, action: PayloadAction<Product>) => {
      const {id} = action.payload;
      const existingProduct = state.addToWishlist.find(
        (product) => product.id === id
      );
    
      if (!existingProduct) {
        state.addToWishlist.push({...action.payload});
        toast("Item added to Wishlist.");
      } else {
        toast("Item already exists in Wishlist.");
      }
    },

    deleteItem: (state, action: PayloadAction<ProductCart>) => {
      state.addToCart = state.addToCart.filter(
        (product) => product.id !== action.payload.id
      );
    },

    resetCart: (state) => {
      state.addToCart = [];
      // toast.success("OMG! No more products.");
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantityChange: number }>
    ) => {
      const { id, quantityChange } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        const newQuantity = (existingProduct.quantity || 1) + quantityChange;
        existingProduct.quantity = Math.max(newQuantity, 1);
      }
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: number; quantityChange: number }>
    ) => {
      const { id, quantityChange } = action.payload;
      const existingProduct = state.addToCart.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        const newQuantity = (existingProduct.quantity || 1) + quantityChange;
        existingProduct.quantity = Math.max(newQuantity, 1);
      }
    },
  },
});

export const {
  addToCart,
  resetCart,
  updateQuantity,
  updateCartQuantity,
  deleteItem,
  setProductList,
  addToWishList,
  setBlogs,
  setProductSearch,
  setReview
} = productSlice.actions;
export default productSlice.reducer;
