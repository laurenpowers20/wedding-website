import { NavLink } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <>
      <div className="nav-link-container">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/location">
          Party Location
        </NavLink>
        <NavLink className="navlink" to="/travelandstay">
          Travel & Stay
        </NavLink>
        <NavLink className="navlink" to="/ourstory">
          Our Story
        </NavLink>
        <NavLink className="navlink" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="navlink" to="/registry">
          Registry
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
