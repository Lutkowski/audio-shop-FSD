import {ReactNode} from "react";
import classes from "./Navbar.module.scss";
import classNames from "classnames";

interface NavbarProps {
    children: ReactNode
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({children, className}) => {
    return (
        <nav className={classNames(classes.Navbar, className)}>
            {children}
        </nav>
    );
};

export default Navbar;
