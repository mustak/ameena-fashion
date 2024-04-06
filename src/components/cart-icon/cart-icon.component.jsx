import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { toggleDropdown, cartCount } = useContext(CartContext);
    // const total = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
