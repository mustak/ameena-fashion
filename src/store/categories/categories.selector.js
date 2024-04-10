import { createSelector } from 'reselect';

const reduceFunction = (acc, category) => {
    const { title, items } = category;

    acc[title.toLowerCase()] = items;

    return acc;
};

const selectCategoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce(reduceFunction, {})
);

export const selectIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);
