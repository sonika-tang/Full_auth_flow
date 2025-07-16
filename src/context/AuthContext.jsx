import { createContext, useState, useEffect } from "react";
import { isAuthenticated, getToken } from "../utils/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = isAuthenticated();
        if (user) setAuth(user);
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
