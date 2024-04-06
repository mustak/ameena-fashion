//
import {
    CartItem as CartItemDetails,
    Image,
    ItemDetails,
    Name,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <CartItemDetails>
            <Image src={imageUrl} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <span>
                    {quantity} x {price}
                </span>
            </ItemDetails>
        </CartItemDetails>
    );
};

export default CartItem;
