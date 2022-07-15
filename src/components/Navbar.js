import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div class="navbar">
            <h1>Profession Tracker</h1>
            <ul>
                <Link to="/"><li>Form</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/final"><li>Final</li></Link>
            </ul>        
        </div>
        
    ) 
    
}

export default Navbar;