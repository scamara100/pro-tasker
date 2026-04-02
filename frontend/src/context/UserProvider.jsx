import { useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

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
    
    
    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;