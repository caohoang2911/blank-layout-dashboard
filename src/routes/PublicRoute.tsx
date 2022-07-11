import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "~/app/hooks";
import { getIsLogin } from "~/features/auth/authSlice";


const PublicRoute: React.FC<any>= ({children}) =>{
    const { pathname } = useLocation();
    const isLogin = useAppSelector(getIsLogin)

    if(pathname === '/login' && isLogin){
        return <Navigate to={"/"} />
    }

    return <>{children}</>
}

export default PublicRoute;
