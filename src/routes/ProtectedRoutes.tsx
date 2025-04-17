import { useAuth } from "@/context/auth-context"
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />
}
