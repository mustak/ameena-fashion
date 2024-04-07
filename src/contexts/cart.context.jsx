import { useReducer, createContext } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

const defaultValue = {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    additemToCart: () => {},
    incrementQuantity: () => {},
    decrementQuantity: () => {},
    removeItem: () => {},
};

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

const CART_ACTION_TYPES = {
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    UPDATE_CART: 'UPDATE_CART',
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        case CART_ACTION_TYPES.UPDATE_CART:
            return {
                ...state,
                ...payload,
            };
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
};

export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartReducer = (cartItems) => {
        const cartTotal = cartItems.reduce(
            (acc, curr) => acc + curr.quantity * curr.price,
            0
        );
        const cartCount = cartItems.reduce(
            (acc, curr) => acc + curr.quantity,
            0
        );

        dispatch(
            createAction(CART_ACTION_TYPES.UPDATE_CART, {
                cartItems,
                cartCount,
                cartTotal,
            })
        );
    };

    //
    const toggleDropdown = () =>
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN));

    const addItemToCart = (productToAdd) => {
        const newCart = addItemToArray(state.cartItems, productToAdd);
        updateCartReducer(newCart);
    };
    const incrementQuantity = (id) => {
        let newCart = [...state.cartItems];

        const foundItem = newCart.find((item) => item.id === id);

        if (foundItem) {
            foundItem.quantity++;
        }

        updateCartReducer(newCart);
    };
    const decrementQuantity = (id) => {
        let newCart = [...state.cartItems];

        const foundItem = newCart.find((item) => item.id === id);

        if (foundItem) {
            foundItem.quantity--;
        }
        if (foundItem.quantity <= 0) {
            newCart = state.cartItems.filter((item) => item.id !== id);
        }

        updateCartReducer(newCart);
    };
    const removeItem = (id) => {
        const newCart = state.cartItems.filter((item) => item.id !== id);
        updateCartReducer(newCart);
    };

    return (
        <CartContext.Provider
            value={{
                isCartOpen: state.isCartOpen,
                cartItems: state.cartItems,
                cartCount: state.cartCount,
                cartTotal: state.cartTotal,
                toggleDropdown,
                addItemToCart,
                incrementQuantity,
                decrementQuantity,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
