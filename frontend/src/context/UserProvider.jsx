import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { getToken } from "../clients/api";

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate()
    const logout = () => {
        // clear user state
        setUser(null)
        // clear the localstorage
        localStorage.removeItem('token')
        // navigate user to login page
        navigate('/login')
    } 

    // useEffet that verifies the token and retrieves user data
    useEffect(() => {

        async function getUser() {
            // check if there is a token (if no token, then we can skip steps)
            if(!getToken()) return
            // use the token to verify user (is token valid? is expired?)
            
            // if verified that token valid, take the user data and save it to state

            // if verification falls, logout user
        }
        
    }, [])
    
    
    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;