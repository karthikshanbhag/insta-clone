import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
       <nav>
    <div className="nav-wrapper white">
      <Link to='/' className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default NavBar
