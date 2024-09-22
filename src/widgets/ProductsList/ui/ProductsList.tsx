import {Product, ProductCategory} from "../../../entities/product/types/product.ts";
import {RootState} from "../../../app/store.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import ProductCategorySection from "../../../features/ProductCategory/ui/ProductCategory.tsx";
import classes from "./ProductsList.module.scss"


const ProductsList = () => {
    const products: Product[] = useTypedSelector((state: RootState) => state.products.products)
    const categories = Object.values(ProductCategory)
    return (
        <div className={classes.ProductList}>
            {categories.map((category) => {
                const filteredProducts = products.filter(product => product.category === category);
                return (
                        <ProductCategorySection key={filteredProducts[0].id} category={category as ProductCategory}
                                                products={filteredProducts}></ProductCategorySection>
                )
            })}
        </div>
    );
};

export default ProductsList;
