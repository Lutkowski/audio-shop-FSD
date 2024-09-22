import {configureStore} from '@reduxjs/toolkit'
import productSlice from "../entities/product/slice/productSlice.ts";
import cartSlice from "../entities/cart/slice/cartSlice.ts";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
