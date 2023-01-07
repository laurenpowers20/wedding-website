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
          <NavLink className="navlink" activeClassName="active" to="/location">
            Party
          </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/travel">
            Travel
          </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/faq">
            FAQs
          </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/ourstory">
            Our Story
          </NavLink>

          <NavLink className="navlink" activeClassName="active" to="/photos">
            Photos
          </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/registry">
            Registry
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
