import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        toggleDropdown: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        addItemToCart: (state, action) => {
            console.log(action);
            let foundItem = state.cartItems.find(
                (elem) => elem.id === action.payload.id
            );

            if (!foundItem) {
                foundItem = { ...action.payload };
                foundItem.quantity = 0;
                state.cartItems.push(foundItem);
            }
            foundItem.quantity++;
        },
        incrementQuantity: (state, action) => {
            const foundItem = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (foundItem) {
                foundItem.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const foundItem = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (foundItem) {
                foundItem.quantity--;
            }

            if (foundItem.quantity <= 0) {
                const newCart = state.cartItems.filter(
                    (item) => item.id !== action.payload
                );

                state.cartItems = newCart;
            }
        },
        removeItem: (state, action) => {
            const newCart = state.cartItems.filter(
                (item) => item.id !== action.payload
            );

            state.cartItems = newCart;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    toggleDropdown,
    addItemToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;
