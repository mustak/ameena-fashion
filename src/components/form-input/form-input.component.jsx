/* eslint-disable react/prop-types */
import './form-input.styles.scss';

const FormInput = ({ label, name, ...otherProps }) => {
    return (
        <div className="group">
            <input
                id={name}
                name={name}
                {...otherProps}
                className="form-input"
            />

            {label && (
                <label
                    htmlFor={name}
                    className={`form-input-label ${
                        otherProps.value.length > 0 ? 'shrink' : null
                    }`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
