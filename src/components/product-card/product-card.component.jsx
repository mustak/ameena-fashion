import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={`Image of a ${name}`} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                className="btnCard"
                onClick={() => addItemToCart(product)}
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
