import MainPage from "../pages/Main/ui/MainPage.tsx";
import CartPage from "../pages/Cart/ui/CartPage.tsx";
import {ReactNode} from "react";

export enum AppRoutes {
    MAIN = 'main',
    CART = 'cart'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CART]: '/cart',
}

export const RouterConfig: Record<AppRoutes, { path: string; element: ReactNode }> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.CART]: {
        path: RoutePaths[AppRoutes.CART],
        element: <CartPage/>
    }
}
