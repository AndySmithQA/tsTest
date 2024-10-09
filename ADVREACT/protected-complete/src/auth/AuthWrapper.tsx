import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RenderHeader } from "../structure/Header";
import { RenderMenu, RenderRoutes } from "../structure/RenderNavigation";

const AuthContext = createContext({
    user: { name: "", isAuthenticated: false },
    login: (userName: string, password: string) => Promise.resolve(""),
    logout: () => {}
});
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => { 

    const [ user, setUser ] = useState({ name: "", isAuthenticated: false })

    const login = (userName: string, password: string): Promise<string> => {

        //This is where we would call the API to authenticate the user

        return new Promise<string>((resolve, reject) => {
            if (password === "password") {
                setUser({ name: userName, isAuthenticated: true })
                resolve("Success")
            } else {
                reject("Incorrect password")
            }
        })
    }

    const logout = () => {
        setUser({ ...user, isAuthenticated: false })
        const navigate = useNavigate();
        navigate("/");
    }

    return (
          
        <AuthContext.Provider value={{user, login, logout}}>
             <>
                  <RenderHeader />
                  <RenderMenu />
                  <RenderRoutes />
             </>
             
        </AuthContext.Provider>
   
)

}

