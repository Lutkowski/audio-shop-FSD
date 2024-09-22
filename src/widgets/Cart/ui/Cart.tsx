import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {RootState} from "../../../app/store.ts";
import CartCard from "../../../features/CartCard/ui/CartCard.tsx";
import CartSidebar from "../../../features/CartSidebar/ui/cartSidebar.tsx";
import classes from "./Cart.module.scss";

const Cart = () => {
    const items = useTypedSelector((state: RootState) => state.cart.cartItems)
    return (
        <div className={classes.Cart}>
            <h2>Корзина</h2>
            <div className={classes.CartWrapper}>
                {items.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    <ul>
                        {items.map((item) => (
                            <CartCard item={item} key={item.id}/>
                        ))}
                    </ul>
                )}
                <CartSidebar className={classes.Cart__CartSidebar}/>
            </div>
        </div>
    );
};

export default Cart;
