import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/authProvider"

const ProtectedRoute = ({children}) => {
    const auth = useAuth()
    return auth.user ? children : <Navigate to={"/login"}/>
}

export default ProtectedRoute;