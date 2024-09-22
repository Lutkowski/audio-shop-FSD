import Logo from "../../../shared/ui/Logo/Logo.tsx";
import {CartIcon} from "../../../shared/assets";
import {FavouriteIcon} from "../../../shared/assets";
import Icon from "../../../shared/ui/Icon/Icon.tsx";
import classes from "./Header.module.scss";
import Navbar from "../../../shared/ui/Navbar/Navbar.tsx";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {RootState} from "../../../app/store.ts";


const Header = () => {
    const cartItemsQuantities = useTypedSelector((state: RootState) => state.cart.cartItems.reduce((acc, val) => acc += val.quantity, 0));
    return (
        <header className={classes.Header}>
            <Logo/>
            <Navbar>
                <Icon iconImage={<FavouriteIcon/>} className={classes.Header__Icon}></Icon>
                <Icon iconImage={<CartIcon/>} className={classes.Header__Icon} to={'/cart'}>
                    {cartItemsQuantities > 0 && (
                        <span className={classes.Header__Counter}>{cartItemsQuantities}</span>
                    )}
                </Icon>
            </Navbar>
        </header>
    );
};

export default Header;
