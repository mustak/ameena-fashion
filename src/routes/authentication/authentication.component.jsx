import SignupForm from '../../components/signup-form/signup-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignupForm />
        </div>
    );
};

export default Authentication;

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
