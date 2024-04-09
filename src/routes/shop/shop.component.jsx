import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCategories } from '../../store/categories/categories.actions';
import { getCategorieAndDocs } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getCategorieAndDocs().then((categoriesArray) => {
            dispatch(setCategories(categoriesArray));
        }); // then
    }, [dispatch]); // end useEffect

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":categoryId" element={<Category />} />
        </Routes>
    );
};

export default Shop;
