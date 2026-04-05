import { Link } from "react-router-dom";
import { useUser } from "../../context/useUser.js";

function Navbar() {
  // bring in user info context
  const { user, logout } = useUser();
  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li onClick={logout}>
              <Link to="/login">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      {user && <li>Welcome {user.username}</li>}
    </nav>
  );
}

export default Navbar;
