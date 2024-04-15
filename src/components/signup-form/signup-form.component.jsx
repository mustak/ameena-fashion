import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import {
//     createAuthUserWithEmailAndPassword,
//     createUserDocFromAuth,
// } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signUpStart } from '../../store/user/user.action';

import './signup-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignupForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.log('mhy. passwords do not match.');
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('mhy. Cannot create user. Email is already in use');
            } else {
                console.log('creating user error: ', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="sign-up-container">
            <h2>Don&apos;t have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName"
                    id="suDisplayName"
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    id="suEmail"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    id="suPassword"
                    required
                    onChange={handleChange}
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    id="suConfirmPassword"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <div className="button-group">
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
