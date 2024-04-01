import { useState } from 'react';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

import './signup-from.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignupForm = () => {
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
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            //const userDoc =
            await createUserDocFromAuth(user, { displayName });

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
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
