import styled from 'styled-components';
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from '../button/button.styles';

export const CartDropdownContaier = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid rgb(127, 127, 127);
    border-radius: 4px;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
        margin-top: auto;
        /* padding: 0 0px; */
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: rgba(46, 46, 46, 0.333) rgb(220, 219, 219);
    // overflow: scroll;
`;

// .cart-dropdown-container {
// position: absolute;
// width: 240px;
// height: 340px;
// display: flex;
// flex-direction: column;
// padding: 10px;
// border: 1px solid rgb(127, 127, 127);
// border-radius: 4px;
// background-color: white;
// top: 90px;
// right: 40px;
// z-index: 5;

//     .empty-message {
//         font-size: 18px;
//         margin: 50px auto;
//     }

//     .cart-items {
// height: 240px;
// display: flex;
// flex-direction: column;
// overflow-y: auto;
// scrollbar-gutter: stable;
// scrollbar-width: thin;
// scrollbar-color: rgba(46, 46, 46, 0.333) rgb(220, 219, 219);
// // overflow: scroll;
//     }

//     button {
//         margin-top: auto;
//     }

//     .btnCart {
//         padding: 0 20px;
//     }
// }
