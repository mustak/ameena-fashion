//
import { createSlice } from '@reduxjs/toolkit';
// import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
