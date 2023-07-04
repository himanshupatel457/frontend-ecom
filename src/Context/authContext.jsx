import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const AuthContext = createContext();




const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ''
    })

    //setting headers i.e setting authorised token

    axios.defaults.headers.common['Authorization'] = auth?.token;


    useEffect(() => {
        const authData = localStorage.getItem('auth');
        if (authData) {
            const data = JSON.parse(authData);
            setAuth({
                ...auth,
                user: data.user,
                token: data.token
            })
        }
    }, [])






    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}


//hook for auth

const useAuth = () => {
    return useContext(AuthContext);
}


export { AuthProvider, useAuth }