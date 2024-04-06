import { Link } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import {
    PreviewContainer,
    Title,
    Preview,
} from './category-preview.styles.jsx';
import './category-preview.styles.jsx';

const CategoryPreview = ({ category, products }) => {
    // console.log(categoriesMap);
    return (
        <PreviewContainer key={category}>
            <h2>
                <Link to={`${category}`} className="title">
                    <Title>{category.toUpperCase()}</Title>
                </Link>
            </h2>
            <Preview>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Preview>
        </PreviewContainer>
    );
};
export default CategoryPreview;
