import React from "react";
import "./Nav.scss";
import Logo from "../../images/logoVerde.png";
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo do site" />
          </Link>
        </div>
        <div className="options">
          <Link className="option" to="/Playlists">
            <span>Playlists</span>
          </Link>
          <Link className="option" to="/Premium">
            <span>Premium</span>
          </Link>
          <Link className="option" to="/FAQ">
            <span>Support</span>
          </Link>
          <Link className="option" to="/Download">
            <span>Download</span>
          </Link>
          <div className="account">
            <Link className="option" to="/Login">
              <span>Log-In</span>
            </Link>
            <Link className="option" to="/Register">
              <span>Register</span>
            </Link>
          </div>
        </div>
        <div className="mobileIcon">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default nav;
