// import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title].slice(0, 4);

                return (
                    <CategoryPreview
                        key={title}
                        category={title}
                        products={products}
                    />
                );
            })}
        </>
    );
};

export default CategoriesPreview;
