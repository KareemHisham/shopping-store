import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { IContextState, INewUser } from "@/constant/Interfaces";
import { getCurrentAccount } from "@/lib/subabase/Api";


export const INITIAL_USER = {
    name: "",
    email: "",
    phone: "",
    accountID: ""
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuthenticated: false,
    isLoading: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkUser: async () => false as boolean
}
const AuthContext = createContext<IContextState>(INITIAL_STATE);


const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<INewUser>(INITIAL_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        setIsLoading(true);
        try {
            const currentUser = await getCurrentAccount();
            if (currentUser) {
                setUser({
                    name: currentUser.name,
                    email: currentUser.email,
                    phone: currentUser.phone
                });
                setIsAuthenticated(true);
            }
            return currentUser

        } catch (error) {
            throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
        } finally {
            setIsLoading(false);
        }
    }



    const VALUE = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkUser
    }
    return (
        <AuthContext.Provider value={VALUE}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);