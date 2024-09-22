import {Link} from "react-router-dom";
import classes from "./MyLink.module.scss";
import {ReactNode} from "react";

interface MyLinkProps {
    to: string;
    children: ReactNode
}

const MyLink: React.FC<MyLinkProps> = ({to, children}) => {
    return (
        <div className={classes.MyLink}>
            <Link to={to}>
                {children}
            </Link>
        </div>
    );
};

export default MyLink;
