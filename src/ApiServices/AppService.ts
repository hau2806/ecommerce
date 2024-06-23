import { Product } from './Types';
import ApiService from './ApiService';

const API_URL = "http://localhost:8888/products";
const API_URL_BLOG = "https://jsonplaceholder.typicode.com/posts";

const AppService = {
    async getProduct(id: number) {
        try {
            const response = await ApiService.getRequest(`${API_URL}/${id}`);
            return response.data;
        } catch (err) {
            console.error('Error fetching product:', err);
            throw err;
        }
    },

    async getProducts() {
        try {
            const response = await ApiService.getRequest(API_URL);
            return response.data;
        } catch (err) {
            console.error('Error fetching products:', err);
            throw err;
        }
    },

    async getBlogs() {
        try {
            const response = await ApiService.getRequest(API_URL_BLOG);
            return response.data;
        } catch (err) {
            console.error('Error fetching products:', err);
            throw err;
        }
    },

    async deleteProduct(id: number) {
        try {
            const response = await ApiService.deleteRequest(`${API_URL}/${id}`);
            return response.data;
        } catch (err) {
            console.error('Error deleting product:', err);
            throw err;
        }
    },
};

export default AppService;
