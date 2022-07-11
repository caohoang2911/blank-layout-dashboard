import { Navigate, Route } from "react-router-dom"
import { useAppSelector } from "~/app/hooks";
import { getIsLogin } from "~/features/auth/authSlice";


const PrivateRoute: React.FC<any>= ({children,...rest}) =>{

    const authed = useAppSelector(getIsLogin);
    return authed ? children : <Navigate to="/login" />;
}

export default PrivateRoute;