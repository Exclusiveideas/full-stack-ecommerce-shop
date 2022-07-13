import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        clearProducts: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        }
    }
});

export const { addProduct, clearProducts } = cartSlice.actions
export default cartSlice.reducer