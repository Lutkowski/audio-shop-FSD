import {Product, ProductCategory} from "../types/product.ts";
import {createSlice} from "@reduxjs/toolkit";

const InitialProducts: Product[] = [
    {
        id: '1',
        title: 'Apple BYZ S852I',
        img: 'src/shared/assets/products/headphone1.png',
        rating: 4.7,
        category: ProductCategory.HEADPHONES,
        price: 2927,
        fullPrice: 3527,
    },
    {
        id: '2',
        title: 'Apple EarPods',
        img: 'src/shared/assets/products/headphone2.png',
        rating: 4.5,
        category: ProductCategory.HEADPHONES,
        price: 2327,
    },
    {
        id: '3',
        title: 'Apple EarPods',
        img: 'src/shared/assets/products/headphone3.png',
        rating: 4.5,
        category: ProductCategory.HEADPHONES,
        price: 2327,
    },
    {
        id: '4',
        title: 'Apple BYZ S852I',
        img: 'src/shared/assets/products/headphone1.png',
        rating: 4.7,
        category: ProductCategory.HEADPHONES,
        price: 2927,
    },
    {
        id: '5',
        title: 'Apple EarPods',
        img: 'src/shared/assets/products/headphone2.png',
        rating: 4.5,
        category: ProductCategory.HEADPHONES,
        price: 2327,
    },
    {
        id: '6',
        title: 'Apple EarPods',
        img: 'src/shared/assets/products/headphone3.png',
        rating: 4.5,
        category: ProductCategory.HEADPHONES,
        price: 2327,
    },
    {
        id: '7',
        title: 'Apple AirPods',
        img: 'src/shared/assets/products/headphone4.png',
        rating: 4.7,
        category: ProductCategory.WIRELESS_HEADPHONES,
        price: 9527,
    },
    {
        id: '8',
        title: 'GERLAX GH-04',
        img: 'src/shared/assets/products/headphone5.png',
        rating: 4.7,
        category: ProductCategory.WIRELESS_HEADPHONES,
        price: 6527,
    },
    {
        id: '9',
        title: 'BOROFONE BO4',
        img: 'src/shared/assets/products/headphone6.png',
        rating: 4.7,
        category: ProductCategory.WIRELESS_HEADPHONES,
        price: 7527,
    },
]

interface ProductState {
    products: Product[];
    error: string | null;
}

const initialState: ProductState = {
    products: InitialProducts,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct(state, action: { payload: Product[] }) {
            state.products = action.payload;
        }
    },
});


export default productsSlice.reducer;
