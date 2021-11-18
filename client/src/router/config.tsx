import { CenterContainer } from "../styles";
import { CircularProgress } from "@mui/material";
import { lazy, ReactNode, ComponentType, LazyExoticComponent } from "react";

export interface IRoute {
    // Path, like in basic prop
    path: string;
    // Exact, like in basic prop
    exact: boolean;
    // Preloader for lazy loading
    fallback: NonNullable<ReactNode> | null;
    // Lazy Loaded component
    component?: LazyExoticComponent<ComponentType<any>>;
    // Sub routes
    routes?: IRoute[];
    // Redirect path
    redirect?: string;
    // If router is private, this is going to be true
    private?: boolean;
}

const Loader = (
    <CenterContainer>
        <CircularProgress />
    </CenterContainer>
);

const getRouteObject = (
    path: string,
    component: string,
    isPrivate: boolean
) => {
    return {
        path: path,
        exact: false,
        fallback: Loader,
        private: isPrivate,
        component: lazy(() => import(`../pages/${component}`)),
    };
};

export const routes: IRoute[] = [
    //Default routes//
    {
        path: "/",
        exact: true,
        private: false,
        redirect: "/login",
        fallback: Loader,
    },
    //

    //Privatte Routes//
    //

    //Public Routes//
    getRouteObject(
        "/forgotPasswordConfirmation",
        "ForgotPasswordCofirmation",
        false
    ),
    getRouteObject("/login", "Login", false),
    getRouteObject("/signUp", "SignUp", false),
    getRouteObject("/forgot-password", "ForgotPassword", false),
    getRouteObject("/reset-password", "ResetPassword", false),
    getRouteObject("/*", "ErrorPage", false),
    //
];
