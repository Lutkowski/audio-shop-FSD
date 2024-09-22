import {ReactNode} from "react";
import classNames from "classnames";
import {RoutePaths} from "../../../app/routesConfig.tsx";
import {Link} from "react-router-dom";

interface IconProps {
    iconImage: ReactNode,
    className?: string,
    to?: RoutePaths
    children?: ReactNode
}

const Icon: React.FC<IconProps> = ({iconImage, className, to, children}) => {
    return (
        <Link to={to}>
            <div style={{position: "relative"}}>
                <div className={classNames(className)}>
                    {iconImage}
                </div>
                {children}
            </div>
        </Link>
    );
};

export default Icon;
