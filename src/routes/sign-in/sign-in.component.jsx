import {
    signInWithGooglePopup,
    createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignupForm from '../../components/signup-form/signup-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);

        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>Sign-in page</h1>
            <button onClick={logGoogleUser}>Sign-in with Google Popup</button>
            <SignupForm />
        </div>
    );
};

export default SignIn;

// import { getRedirectResult } from 'firebase/auth';
// import {
//     auth,
//     signInWithGoogleRedirect,
// } from '../utils/firebase/firebase.utils';

// useEffect(() => {
//     getRedirectResult(auth)
//         .then((response) => {
//             console.log(response);
//             if (response) {
//                 createUserDocFromAuth(response.user).then((userDocRef) =>
//                     console.log(userDocRef)
//                 );
//             }
//         })
//         .catch((error) => console.log(error));
// }, []);

/* <button onClick={signInWithGoogleRedirect}>
    Sign-in with Google Redirect
</button> */
