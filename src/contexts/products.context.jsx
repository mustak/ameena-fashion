import { useState, createContext } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: PRODUCTS,
});

export const ProductsProvider = ({
    children,
    defaultValue = { products: PRODUCTS },
}) => {
    const [products, setProducts] = useState(defaultValue);

    return (
        <ProductsContext.Provider value={{ products: products.products }}>
            {children}
        </ProductsContext.Provider>
    );
};
