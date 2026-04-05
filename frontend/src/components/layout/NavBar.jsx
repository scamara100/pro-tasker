import { Link } from "react-router-dom";
import { useUser } from "../../context/useUser.js";

function Navbar() {
  // bring in user info context
  const { user, logout } = useUser();
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title"> 📝 Pro-Tasker </h1>
        <nav className="header-nav">
          <ul>
            {user ? (
              <div style={{display: 'flex', gap: '10px'}}>
                <li >
                  <Link style={{textDecoration: "none"}} to="/">Dashboard</Link>
                </li>
                <li onClick={logout}>
                  <Link style={{textDecoration: "none"}} to="/login">Logout</Link>
                </li>
              </div >
            ) : (
              <div style={{display: 'flex', gap: '10px'}}>
                <li >
                  <Link style={{textDecoration: "none"}} to="/login">Login</Link>
                </li>
                <li>
                  <Link style={{textDecoration: "none"}} to="/register">Register</Link>
                </li>
              </div >
            )}
          </ul>
          {user && <span>Welcome {user.username}</span>}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
