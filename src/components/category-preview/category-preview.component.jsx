import { Link } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ category, products }) => {
    // console.log(categoriesMap);
    return (
        <div key={category} className="category-preview-container">
            <h2>
                <Link to={`${category}`} className="title">
                    <span className="title">{category.toUpperCase()}</span>
                </Link>
            </h2>
            <div className="preview">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default CategoryPreview;
