import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
            return { ...state, isCartOpen: !state.isCartOpen };
        case CART_ACTION_TYPES.UPDATE_CART:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
