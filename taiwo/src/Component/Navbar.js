import React from "react";
import "../Component/Navbar.style.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex_row">
          <img className="logos" src={logo} alt="logo" />
          <nav className="nav_all">
            <ul className="nav_ul">
              <Link to="/" className="link">
                <li >Home</li>
              </Link>
              <Link to="/create" className="link">
                <li >Create</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
