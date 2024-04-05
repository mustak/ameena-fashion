import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import Logo from '../../assets/logo.svg?react';
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <Logo className="logo" /> <span>AMEENA</span>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            SIGNOUT
                        </span>
                    ) : (
                        <Link to="/auth" className="nav-link">
                            SIGN IN
                        </Link>
                    )}

                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
