import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
    onAuthStateChangedListener,
    createUserDocFromAuth,
} from './utils/firebase/firebase.utils';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.reducer';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }

            const pickedUser =
                user &&
                (({ accessToken, displayName, email }) => ({
                    accessToken,
                    displayName,
                    email,
                }))(user);
            console.log(setCurrentUser(pickedUser));
            dispatch(setCurrentUser(pickedUser));
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
