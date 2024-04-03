import { useContext } from 'react';

import ShoppingIcon from '../../assets/shopping-bag.svg?react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { toggleDropdown } = useContext(CartContext);

    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">10</span>
        </div>
    );
};

export default CartIcon;
