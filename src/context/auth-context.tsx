import { User } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginType = {
    email: string
    password: string
}

interface ProviderProps {
    user: User | null
    token: string | null
    login: (data: LoginType) => Promise<boolean>
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<ProviderProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user")

        if (savedToken && savedUser) {
            setToken(savedToken);
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error("Invalid user data:", error);
            }
        }
        setLoading(false)
    }, []);

    const login = async (data: LoginType): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (data.email === "jhondoe@gmail.com" && data.password === "password") {
                    const fakeToken = "fake-token-12345678";
                    const fakeUser = {
                        id: 1,
                        name: "Jhon Doe",
                        email: data.email,
                    }

                    localStorage.setItem("token", fakeToken)
                    localStorage.setItem("user", JSON.stringify(fakeUser))

                    setToken(fakeToken)
                    setUser(fakeUser)
                    navigate("/schedule")

                    resolve(true)
                } else {
                    resolve(false)
                }
            }, 1000)
        })
    }

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}