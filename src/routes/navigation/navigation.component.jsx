import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg?react';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <Logo className="logo" /> <span>Ameena&apos;s Fashion</span>
                </Link>
                <div className="nav-links-container">
                    <Link to="/" className="nav-link">
                        HOME
                    </Link>
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    <Link to="/auth" className="nav-link">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
