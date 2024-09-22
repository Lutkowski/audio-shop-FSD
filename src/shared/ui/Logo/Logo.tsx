import classes from './Logo.module.scss'
import MyLink from "../MyLink/MyLink.tsx";

const Logo = () => {
    return (
        <MyLink to={'/'}>
            <h1 className={classes.Logo}>QPICK</h1>
        </MyLink>
    );
};

export default Logo;
