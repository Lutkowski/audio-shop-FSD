import {Product, ProductCategory} from "../../../entities/product/types/product.ts";
import ProductCard from "../../ProductCard/ui/ProductCard.tsx";
import classes from "./ProductCategory.module.scss";

interface ProductCategoryProps {
    category: ProductCategory,
    products: Product[]
}


const ProductCategorySection: React.FC<ProductCategoryProps> = ({category, products}) => {
    return (
        <section className={classes.ProductCategory}>
            <h2>{category}</h2>
            <ul className={classes.ProductCategory__Content}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </ul>
        </section>
    );
};

export default ProductCategorySection;
