import { useState } from 'react';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={handleChange}
                    value={password}
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
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
