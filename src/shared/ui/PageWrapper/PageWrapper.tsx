import {ReactNode} from "react";
import classes from "./PageWrapper.module.scss";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
    return (
        <div className={classes.PageWrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;
