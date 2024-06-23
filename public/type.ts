export interface Blog {
  postId: number;
  title: string;
  imageUrl: string;
  body: string;
  writer: string;
  datePosted: string;
}

export interface Product {
  // productId: string;
  // productName: string;
  // description: string;
  // price: number;
  // imageUrl: string;
  title: string;
  description: string;
}

export interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ContactForm {
  subject: string;
  email: string;
  message: string;
}

export interface CarouselProps {
  images: string[];
  title: string;
  itemNames: string[];
  prices: number[];
  redirectButtons: string[];
  redirectLinks: string[];
  blogDescription: string[];
  id: number;
  itemId: number[];
}

export interface ProductsSaleProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
}
