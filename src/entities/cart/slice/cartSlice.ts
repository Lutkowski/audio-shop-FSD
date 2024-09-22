import {CartItem} from "../types/cart.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartState {
    cartItems: CartItem[]
}

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const product = action.payload
            const existingCartItem = state.cartItems.find(item => item.id === product.id);

            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                state.cartItems.push({...product, quantity: 1});
            }
        },
        deleteFromCart(state, action: PayloadAction<string>) {
            const productId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== productId);
        },

        removeFromCart(state, action: PayloadAction<string>) {
            const productId = action.payload;
            const existingItem = state.cartItems.find(item => item.id === productId);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== productId);
            }
        }
    }
})

export const {addToCart, removeFromCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;
