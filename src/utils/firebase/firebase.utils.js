// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    // FacebookAuthProvider,
    // TwitterAuthProvider,
    // GithubAuthProvider,
    // EmailAuthProvider,
    createUserWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
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

/**
 * setup providers here
 * google, facebook, twiter etc
 */
const googleProvider = new GoogleAuthProvider();
// provider.addScope('profile')
// provider.addScope('email')
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.log('mhy. error creating user.', error);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb);
