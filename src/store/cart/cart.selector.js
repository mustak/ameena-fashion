import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);
