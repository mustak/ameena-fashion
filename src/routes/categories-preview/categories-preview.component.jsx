import { useSelector } from 'react-redux';

import {
    selectCategoriesMap,
    selectIsLoading,
} from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spineer.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title].slice(0, 4);

                    return (
                        <CategoryPreview
                            key={title}
                            category={title}
                            products={products}
                        />
                    );
                })
            )}
        </>
    );
};

export default CategoriesPreview;
