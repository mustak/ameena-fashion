import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../store/user/user.action';

import Logo from '../../assets/logo.svg?react';

import {
    NavigationContainer,
    LogoContainer,
    Span,
    NavLinks,
    NavLink,
} from './navigation.styles';

const Navigation = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const isCartOpened = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

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
                {isCartOpened && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
