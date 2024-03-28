import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="logo-container">Logo</div>
                <div className="nav-links-container">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
