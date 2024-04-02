import {
    signinAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signinAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(user);

            const userDocRef = await createUserDocFromAuth(user);
            console.log(userDocRef);

            resetFormFields();
        } catch (error) {
            if (
                error.code === 'auth/invalid-credential' ||
                error.code === 'auth/wrong-password'
            ) {
                console.log('mhy. Cannot authenticate user. Try again.');
            } else {
                console.log('authentication error: ', error);
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

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);

        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef);
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    name="email"
                    id="siEmail"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    id="siPassword"
                    required
                    onChange={handleChange}
                    value={password}
                />
                <div className="button-group">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
