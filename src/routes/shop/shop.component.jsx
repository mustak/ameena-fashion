import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
    // console.log(categoriesMap);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":categoryId" element={<Category />} />
        </Routes>
    );
};

export default Shop;
