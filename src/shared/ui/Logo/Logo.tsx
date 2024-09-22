import classes from './Logo.module.scss'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'}>
            <h1 className={classes.Logo}>QPICK</h1>
        </Link>
    );
};

export default Logo;
