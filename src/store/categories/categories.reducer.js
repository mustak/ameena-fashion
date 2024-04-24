import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;
