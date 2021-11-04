import React from "react";
import "./Footer.scss";
import logo from "../../images/logoBranca.png";
import { Link } from "react-router-dom";

const Footer = () => {
  function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getYear() + 1900;
    if (parseInt(day) < 10) {
      day = "0" + day;
    }
    if (parseInt(month) < 10) {
      month = "0" + month;
    }
    return day + "/" + month + "/" + year;
  }

  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo branca" />
        </Link>
      </div>
      <div className="content">
        <div className="company">
          <h3>company</h3>
          <ul>
            <li>
              <a href="https://www.spotify.com/us/about-us/contact/">About</a>
            </li>
            <li>
              <a href="https://www.lifeatspotify.com">Jobs</a>
            </li>
            <li>
              <a href="https://newsroom.spotify.com/">For the Record</a>
            </li>
          </ul>
        </div>
        <div className="communities">
          <h3>Useful links</h3>
          <ul>
            <li>
              <a href="https://support.spotify.com/us">Support</a>
            </li>
            <li>
              <a href="https://open.spotify.com">Web Player</a>
            </li>
            <li>
              <a href="https://www.spotify.com/us/free/">Free Mobile App</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="date">
        <h3>{getDate()}</h3>
      </div>
    </footer>
  );
};

export default Footer;
