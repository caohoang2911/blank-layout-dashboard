import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { getLoadingLogin, loginRequest } from "../authSlice";

const Login : React.FC<void> =() =>{
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const loading = useAppSelector(getLoadingLogin)

    return (
        <>
            <button onClick={()=> dispatch(loginRequest(navigate))}>Login </button>
            <br/>
            {loading && 'Loading...'}
        </>
    )

}

export default Login;