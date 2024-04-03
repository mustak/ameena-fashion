import { useState, createContext } from 'react';

const defaultValue = {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    additemToCart: () => {},
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

export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(defaultValue.cartItems);

    const toggleDropdown = () => setIsCartOpen(!isCartOpen);

    const addItemToCart = (productToAdd) => {
        setCartItems(addItemToArray(cartItems, productToAdd));
    };

    return (
        <CartContext.Provider
            value={{ isCartOpen, toggleDropdown, cartItems, addItemToCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
