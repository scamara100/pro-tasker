import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { getToken, userClient } from "../clients/api.js";

// check if there's a token, if so assume that there's a user
const initialUser = getToken()? {usename: null} : null

function UserProvider({ children }) {
    // set the initial state null or a tempory user
  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();
  const logout = () => {
    // clear user state
    setUser(null);
    // clear the localstorage
    localStorage.removeItem("token");
    // navigate user to login page
    navigate("/login");
  };

  // useEffet that verifies the token and retrieves user data
  useEffect(() => {
    async function getUser() {
      try {
        // check if there is a token (if no token, then we can skip steps)
        if (!getToken()) return;
        // use the token to verify user (is token valid? is expired?)
        const { data } = await userClient.get("/");

        // if verified that token valid, take the user data and save it to state
        setUser(data);
        console.log(data);
      } catch (err) {
        // if verification falls, logout user
        console.log(err);
        logout();
      }
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
