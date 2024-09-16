import {useSelector} from "react-redux";
import {isUserAuthenticated} from "../store/auth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export const PublicRoute = () => {
    const location = useLocation();
    const isAuthenticated = useSelector(isUserAuthenticated)
    return isAuthenticated ?
        <Navigate
            to={'/admin/app'}
        /> :
        <Outlet/>;
}