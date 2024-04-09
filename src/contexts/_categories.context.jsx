import { useState, createContext } from 'react';

import { getCategorieAndDocs } from '../utils/firebase/firebase.utils.js';

import { useEffect } from 'react';

export const CategoriesContext = createContext({
    categoriesMap: {}, //SHOP_DATA[0].items,
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        getCategorieAndDocs().then((categoryMap) => {
            setCategoriesMap(categoryMap);
        }); // then
    }, []); // end useEffect

    return (
        <CategoriesContext.Provider value={{ categoriesMap }}>
            {children}
        </CategoriesContext.Provider>
    );
};
