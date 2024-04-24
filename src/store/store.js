import {
    configureStore /* applyMiddleware, compose */,
} from '@reduxjs/toolkit';
// import {
//     compose,
//     legacy_createStore as createStore,
//     applyMiddleware,
// } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
    Boolean
);

// const composeEnhancer =
//     // eslint-disable-next-line no-undef
//     (process.env.NODE_ENV !== 'production' &&
//         window &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//     persistedReducer,
//     undefined,
//     composedEnhancers
// );
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
        ...middleWares,
    ],
});

export const persistor = persistStore(store);
