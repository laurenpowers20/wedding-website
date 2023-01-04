import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav-component">
        <div className="nav-link-container">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/location">
            Party Location
          </NavLink>
          <NavLink className="navlink" to="/photos">
            Photos
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
