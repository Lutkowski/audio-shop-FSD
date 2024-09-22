import {CartItem} from "../../../entities/cart/types/cart.ts";
import {useDispatch} from "react-redux";
import {addToCart, deleteFromCart, removeFromCart} from "../../../entities/cart/slice/cartSlice.ts";
import classes from './CartCard.module.scss'
import Button from "../../../shared/ui/Button/ui/Button.tsx";
import {BinIcon} from "../../../shared/assets";

interface CartItemProps {
    item: CartItem
}

const CartCard: React.FC<CartItemProps> = ({item}) => {

    const productSummaryPrice = item.price * item.quantity;
    const dispatch = useDispatch()
    const handleIncrease = () => {
        dispatch(addToCart(item));
    };
    const handleDecrease = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleDelete = () => {
        dispatch(deleteFromCart(item.id))
    };

    return (
        <div className={classes.CartCard}>
            <div className={classes.CartCard__Product}>
                <img src={item.img} alt={item.title}/>
                <div className={classes.CartCard__Control}>
                    <Button clickHandler={handleIncrease} theme='Cart'>+</Button>
                    <p>{item.quantity}</p>
                    <Button clickHandler={handleDecrease} theme='Cart'>-</Button>
                </div>
            </div>
            <div className={classes.CartCard__Info}>
                <h3>{item.title}</h3>
                <p>{item.price} ₽</p>
            </div>
            <div className={classes.CartCard__Control_Right}>
                <Button clickHandler={handleDelete}>
                    <BinIcon/>
                </Button>
                <div>{productSummaryPrice} ₽</div>
            </div>
        </div>
    );
};

export default CartCard;
