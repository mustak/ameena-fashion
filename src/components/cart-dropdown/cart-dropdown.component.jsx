//
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownContaier,
    CartItems,
    EmptyMessage,
} from './cart-dropdown.styles';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    return (
        <CartDropdownContaier>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button className="btnCart" onClick={() => navigate('/checkout')}>
                GO TO CHECKOUT
            </Button>
        </CartDropdownContaier>
    );
};

export default CartDropDown;
