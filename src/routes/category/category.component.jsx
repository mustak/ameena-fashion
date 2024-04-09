//
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/categories.selector';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[categoryId]);
    }, [categoriesMap, categoryId]);

    return (
        <>
            <h2 className="category-title">All {categoryId.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
};
export default Category;
