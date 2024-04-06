/* eslint-disable react/prop-types */
import { Group, Input, FormInputLabel } from './form-input.styles';

const FormInput = ({ label, id, ...otherProps }) => {
    return (
        <Group>
            <Input id={id} {...otherProps} />

            {label && (
                <FormInputLabel htmlFor={id} $shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
