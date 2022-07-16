import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-left">Profession Tracker</div>
      <div class="navbar-right">
        <ul>
          <Link to="/">
            <li>Login</li>
          </Link>
          <Link to="/contact">
            <li>Add</li>
          </Link>
          <Link to="/final">
            <li>Contacts</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
