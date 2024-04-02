/* eslint-disable react/prop-types */
import './form-input.styles.scss';

const FormInput = ({ label, id, ...otherProps }) => {
    return (
        <div className="group">
            <input id={id} {...otherProps} className="form-input" />

            {label && (
                <label
                    htmlFor={id}
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
