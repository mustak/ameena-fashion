//
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

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
    const { name, quantity, price, imageUrl, id } = item;
    const { incrementQuantity, decrementQuantity, removeItem } =
        useContext(CartContext);

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
                <Arrow onClick={() => decrementQuantity(id)}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => incrementQuantity(id)}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => removeItem(id)}>&#10005;</RemoveButton>
        </CheckoutContainer>
    );
};
export default CheckoutItem;
