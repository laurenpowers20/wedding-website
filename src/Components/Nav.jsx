import { NavLink } from "react-router-dom";
import anchor from "../images/icons/anchor.png";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav-component">
        <div className="nav-link-container">
          <NavLink className="navlink" to="/">
            Home <img src={anchor} className="nav-icon" alt="anchor icon" />
          </NavLink>
          <NavLink className="navlink" to="/location">
            Party Location
          </NavLink>
          {/* <NavLink className="navlink" to="/photos">
            Photos
          </NavLink> */}
          <NavLink className="navlink" to="/faq">
            FAQs
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
