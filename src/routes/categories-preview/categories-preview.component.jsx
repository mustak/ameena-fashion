import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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
