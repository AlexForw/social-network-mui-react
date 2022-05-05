import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../assets/hooks/useAuth";


const RequireAuth = () => {
    const location = useLocation()
    const { authUser } = useAuth()

    return (
        authUser?.user?._tokenResponse?.email ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}
export default RequireAuth;