import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button buttonType="inverted" className="btnCart">
                GO TO CHECKOUT
            </Button>
        </div>
    );
};

export default CartDropDown;
