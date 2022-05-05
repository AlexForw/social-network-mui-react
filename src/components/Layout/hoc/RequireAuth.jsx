import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../assets/hooks/useAuth";


const RequireAuth = () => {
    const location = useLocation()
    const { authUser } = useAuth()
    console.log(authUser);


    return (
        authUser?.loginEmail ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}
export default RequireAuth;