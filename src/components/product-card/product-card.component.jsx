import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart(product));
    };

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
                onClick={handleAddToCart}
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
