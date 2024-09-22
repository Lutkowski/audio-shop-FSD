import {Product} from "../../product/types/product.ts";

export interface CartItem extends Omit<Product, 'rating' | 'fullPrice' | 'category'> {
    quantity: number;
}
