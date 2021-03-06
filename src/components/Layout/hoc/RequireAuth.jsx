import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../assets/hooks/useAuth";


const RequireAuth = () => {
    let storage
    const location = useLocation()
    const { authUser } = useAuth()

    if (localStorage.getItem('storage') === null) {                        
        storage = []                                                       
    } else {
        storage = JSON.parse(localStorage.getItem('storage'))                
    }


    if (authUser?.user?._tokenResponse?.email) {
        storage.push(authUser?.user?._tokenResponse?.email)
        localStorage.setItem('storage', JSON.stringify(storage))
    }
    return (
        localStorage.getItem('storage') ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}
export default RequireAuth;