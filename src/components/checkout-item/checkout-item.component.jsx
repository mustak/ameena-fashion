import { useDispatch, useSelector } from 'react-redux';

import {
    incrementQuantity,
    decrementQuantity,
    removeItem,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
    CheckoutContainer,
    ImageContainer,
    Name,
    Image,
    Quantity,
    Price,
    Arrow,
    Value,
    RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, quantity, price, imageUrl, id } = item;

    const actionhandler = (handler) => {
        dispatch(handler(cartItems, id));
    };
    return (
        <CheckoutContainer key={id}>
            <ImageContainer>
                <Image
                    src={imageUrl}
                    alt={`image of ${name}`}
                    // style={{ width: '65px', borderRadius: '4px' }}
                />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => actionhandler(decrementQuantity)}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => actionhandler(incrementQuantity)}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => actionhandler(removeItem)}>
                &#10005;
            </RemoveButton>
        </CheckoutContainer>
    );
};
export default CheckoutItem;
