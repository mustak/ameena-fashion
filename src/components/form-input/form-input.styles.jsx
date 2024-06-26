import styled, { css } from 'styled-components';

const subColor = '#6c6c6c';
const mainColor = '#212121';

const shrinkLabelStyles = css`
    top: -18px;
    font-size: 12px;
    color: ${mainColor};
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({ $shrink }) => $shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
    background: none;
    background-color: #eaeaff;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        ${shrinkLabelStyles}
    }
`;

export const Group = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;
