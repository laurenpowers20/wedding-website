import { NavLink } from "react-router-dom";
import anchor from "../images/icons/anchor-icon.png";
import camera from "../images/icons/camera.png";
import party from "../images/icons/party.png";
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
            Party Location{" "}
            <img src={party} className="nav-icon" alt="party icon" />
          </NavLink>
          <NavLink className="navlink" to="/photos">
            Photos <img src={camera} className="nav-icon" alt="camera icon" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
