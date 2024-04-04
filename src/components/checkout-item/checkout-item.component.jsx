//
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, quantity, price, imageUrl, id } = item;
    const { incrementQuantity, decrementQuantity, removeItem } =
        useContext(CartContext);

    return (
        <div key={id} className="checkout-item-container ">
            <div className="image-container">
                <img
                    src={imageUrl}
                    alt={`image of ${name}`}
                    style={{ width: '65px', borderRadius: '4px' }}
                />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    aria-label="button"
                    className="arrow"
                    onClick={() => decrementQuantity(id)}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    aria-label="button"
                    className="arrow"
                    onClick={() => incrementQuantity(id)}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(id)}>
                &#10005;
            </div>
        </div>
    );
};
export default CheckoutItem;
