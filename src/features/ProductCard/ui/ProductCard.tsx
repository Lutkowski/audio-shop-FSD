import {Product} from "../../../entities/product/types/product.ts";
import classes from "./ProductCard.module.scss"
import {useDispatch} from "react-redux";
import {addToCart} from "../../../entities/cart/slice/cartSlice.ts";
import {CartItem} from "../../../entities/cart/types/cart.ts";
import {StarIcon} from "../../../shared/assets";
import Button from "../../../shared/ui/Button/ui/Button.tsx";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const dispatch = useDispatch()
    const handleBuy = () => {
        const item: CartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: 1
        }
        dispatch(addToCart(item));
    }
    return (
        <div className={classes.ProductCard}>
            <div className={classes.ProductCard__ImageContainer}>
                <img src={product.img} alt={product.title}/>
            </div>
            <div className={classes.ProductCard__Description}>
                <h3>{product.title}</h3>
                <div className={classes.ProductCard__Prices}>
                    <p>{`${product.price} ₽`}</p>
                    {product.fullPrice && <p className={classes.fullPrice}>{`${product.fullPrice} ₽`}</p>}
                </div>
                <div className={classes.ProductCard__Rating}>
                    <StarIcon/>
                    <p>{product.rating}</p>
                </div>
                <Button clickHandler={handleBuy} theme='Buy'>Купить</Button>
            </div>
        </div>
    );
};

export default ProductCard;
