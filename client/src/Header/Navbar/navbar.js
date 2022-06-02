import React from "react";
import './navbar.css'; 
import { Link } from "react-router-dom";
const Navbar = () => {
  const userName = localStorage.getItem("name")
  const Logout = () => { 
    localStorage.clear()
    
  }
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Hello, {userName} </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        {/* Navigation Menu */}
        <div className="menu">
            <li >
            <Link onClick={Logout} to = "/">Logout</Link></li>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;