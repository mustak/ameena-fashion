import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

/////////////////////////////////////
const addItemToArray = (arr, item) => {
    const newArray = [...arr];
    let foundItem = newArray.find((elem) => elem.id === item.id);

    if (!foundItem) {
        foundItem = { ...item };
        foundItem.quantity = 0;
        newArray.push(foundItem);
    }

    foundItem.quantity++;

    return newArray;
};
//////////////////////////////

export const toggleDropdown = () =>
    createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCart = addItemToArray(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCart);
};
export const incrementQuantity = (cartItems, id) => {
    let newCart = [...cartItems];

    const foundItem = newCart.find((item) => item.id === id);

    if (foundItem) {
        foundItem.quantity++;
    }

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCart);
};
export const decrementQuantity = (cartItems, id) => {
    let newCart = [...cartItems];

    const foundItem = newCart.find((item) => item.id === id);

    if (foundItem) {
        foundItem.quantity--;
    }
    if (foundItem.quantity <= 0) {
        // newCart = cartItems.filter((item) => item.id !== id);
        return removeItem(cartItems, id);
    }

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCart);
};
export const removeItem = (cartItems, id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCart);
};
