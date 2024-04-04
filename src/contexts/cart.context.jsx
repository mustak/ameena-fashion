import { useState, useEffect, createContext } from 'react';

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

export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(defaultValue.cartItems);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
        setCartCount(cCount);
    }, [cartItems]);

    useEffect(() => {
        const cTotal = cartItems.reduce(
            (acc, curr) => acc + curr.quantity * curr.price,
            0
        );
        setCartTotal(cTotal);
    }, [cartItems]);

    const toggleDropdown = () => setIsCartOpen(!isCartOpen);

    const addItemToCart = (productToAdd) => {
        setCartItems(addItemToArray(cartItems, productToAdd));
    };

    const incrementQuantity = (id) => {
        const newArray = [...cartItems];

        const foundItem = newArray.find((item) => item.id === id);

        if (foundItem) {
            foundItem.quantity++;
        }

        setCartItems(newArray);
    };
    const decrementQuantity = (id) => {
        const newArray = [...cartItems];

        const foundItem = newArray.find((item) => item.id === id);

        if (foundItem) {
            foundItem.quantity--;
        }

        if (foundItem.quantity <= 0) {
            removeItem(id);
            return;
        }

        setCartItems(newArray);
    };
    const removeItem = (id) => {
        const newArray = cartItems.filter((item) => item.id !== id);
        setCartItems(newArray);
    };

    return (
        <CartContext.Provider
            value={{
                isCartOpen,
                cartItems,
                cartCount,
                cartTotal,
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
