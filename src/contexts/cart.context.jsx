import { useState, createContext } from 'react';

// const defaultValue = {
//     isCartOpen: false,
//     setIsCartOpen: () => {},
// };

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleDropdown = () => setIsCartOpen(!isCartOpen);

    return (
        <CartContext.Provider value={{ isCartOpen, toggleDropdown }}>
            {children}
        </CartContext.Provider>
    );
};
