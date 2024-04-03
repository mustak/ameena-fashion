import { useContext } from 'react';

import ShoppingIcon from '../../assets/shopping-bag.svg?react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { toggleDropdown, cartItems } = useContext(CartContext);
    const total = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{total}</span>
        </div>
    );
};

export default CartIcon;
