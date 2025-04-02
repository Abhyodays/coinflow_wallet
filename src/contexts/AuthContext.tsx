import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/User";

type AuthContextType = {
    user?: User,
    authenticate: (user: any) => void
}

const AuthContext = createContext<AuthContextType | null>(null);

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext must be used in AuthProvider")
    }
    return context;
}

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const authenticate = (user: any) => {
        setUser(user);
    }
    return (
        <AuthContext.Provider value={{ user, authenticate }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }

