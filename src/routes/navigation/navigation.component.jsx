import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import Logo from '../../assets/logo.svg?react';

import {
    NavigationContainer,
    LogoContainer,
    Span,
    NavLinks,
    NavLink,
} from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo" /> <Span>AMEENA</Span>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}

                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
