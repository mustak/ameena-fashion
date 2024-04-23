import { useSelector, useDispatch } from 'react-redux';

import { selectCartCount } from '../../store/cart/cart.selector';
import { toggleDropdown } from '../../store/cart/cart.reducer';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);

    const toggleDropdownHandler = () => dispatch(toggleDropdown());

    return (
        <CartIconContainer onClick={toggleDropdownHandler}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
