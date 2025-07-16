import { createContext, useState, useEffect } from "react";
import { isAuthenticated } from "../utils/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const user = isAuthenticated();
    console.log("Checked user from token:", user);
    setAuth(user);
    setLoading(false);
}, []);


  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
