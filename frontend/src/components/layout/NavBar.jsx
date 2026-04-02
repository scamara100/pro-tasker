import { Link } from "react-router-dom";
import {useUser} from '../../context/useUser.js'

function Navbar() {
    // bring in user info context
    const { user } = useUser()
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/projectpage">Project Page</Link>
        </li>
        {user && <li>Welcome {user.username}</li>}
      </ul>
    </nav>
  );
}

export default Navbar;