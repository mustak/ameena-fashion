// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCFSlmOaO5aPtNbTaf5bUGeU_8ldvzejzU',
    authDomain: 'ameenas-fashion.firebaseapp.com',
    projectId: 'ameenas-fashion',
    storageBucket: 'ameenas-fashion.appspot.com',
    messagingSenderId: '299031638173',
    appId: '1:299031638173:web:c54a1a2ee26f2d41fc6474',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// provider.addScope('profile')
// provider.addScope('email')
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('mhy. error creating user.', error);
        }
    }

    return userDocRef;
};
