import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navogation.component';
import Home from './routes/home/home.component';
import SignIn from './sign-in/sign-in.component';

const Shop = () => {
    return <h1>Temporary Shop Route</h1>;
};
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="signin" element={<SignIn />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
