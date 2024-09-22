import classes from "./Button.module.scss";
import {MouseEventHandler, ReactNode} from "react";
import classNames from "classnames";

interface ButtonProps {
    clickHandler?: MouseEventHandler;
    children: ReactNode;
    theme?: ButtonTheme;
}

enum ButtonTheme {
    Buy = 'Buy',
    Cart = 'Cart',
    Order = 'Order'
}

const ButtonThemeClass = {
    [ButtonTheme.Buy]: classes.Button_Buy,
    [ButtonTheme.Cart]: classes.Button_Cart,
    [ButtonTheme.Order]: classes.Button_Order
}

const Button: React.FC<ButtonProps> = ({clickHandler, children, theme}) => {
    return (
        <button className={classNames(classes.Button, ButtonThemeClass[theme])} onClick={clickHandler}>
            {children}
        </button>
    );
};

export default Button;
