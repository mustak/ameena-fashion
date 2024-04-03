/* eslint-disable react/prop-types */
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const Button = ({ children, className, buttonType, ...buttonProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;
