import Button from "../../../shared/ui/Button/ui/Button.tsx";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {RootState} from "../../../app/store.ts";
import classNames from "classnames";
import classes from "./CartSidebar.module.scss";

interface CartSidebarProps {
    className: string;
}

const CartSidebar: React.FC<CartSidebarProps> = ({className}) => {
    const cartItems = useTypedSelector((state: RootState) => state.cart.cartItems)
    const summary = cartItems.reduce((acc, val) => acc += val.quantity * val.price, 0)
    return (
        <div className={classNames(className, classes.CartSidebar)}>
            <div>
                <p>ИТОГО</p>
                <p>{`₽ ${summary}`}</p>
            </div>
            <Button theme='Order'>
                Перейти к оформлению
            </Button>
        </div>
    );
};

export default CartSidebar;
