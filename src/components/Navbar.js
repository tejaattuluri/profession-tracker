import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="brand">Profession tracker</div>
            <div class="menu-items">
                <ul>
                    <Link to="/contact"><li>Add contact</li></Link>
                    <Link to="/final"><li>Contacts</li></Link>
                    <Link to="/dates"><li>Dates</li></Link>
                </ul>
            </div>
            <div class="login-btn"><Link to="/"><li>Login</li></Link></div>
        </div>
    )

}

export default Navbar;