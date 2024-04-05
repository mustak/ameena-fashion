//
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    // const [products, setProducts] = useState(categoriesMap[categoryId]);

    // const products = categoriesMap[categoryId];

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
