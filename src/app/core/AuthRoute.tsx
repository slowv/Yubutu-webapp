import {useSelector} from "react-redux";
import {isUserAuthenticated} from "../store/auth";
import {Navigate, useLocation} from "react-router-dom";
import {MasterLayout} from "../common/component/layout/MasterLayout";

export const AuthRoute = () => {
    const location = useLocation();
    const isAuthenticated = useSelector(isUserAuthenticated)

    return (
        isAuthenticated ?
            <MasterLayout/> :
            <Navigate
                to={{
                    pathname: '/admin/login'
                }}
                state={{
                    from: location
                }}
                replace
            />
    )

}