import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div class="navbar">
            <span class="brand">Profession tracker</span>
            <ul>
                <Link to="/"><li>Login</li></Link>
                <Link to="/contact"><li>Add contact</li></Link>
                <Link to="/final"><li>Contacts</li></Link>
            </ul>        
        </div>
        
    ) 
    
}

export default Navbar;