import { Link } from "react-router-dom";
import {useUser} from '../context/useUser.js'

function Navbar() {
    // bring in user info context
    const { user } = useUser()
  return (
    <nav>
      <ul>
        {user && <li>Welcome {user.username}</li>}
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;