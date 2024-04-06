import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
    padding: 25px 0;
    font-size: 2rem;
    font-weight: 700;
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

export const Span = styled.span`
    margin-top: 8px;
`;
