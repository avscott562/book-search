import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {

    return(
        <nav className = "navbar navbar-expand-md sticky-top navbar-light bg-light">

          <Link className = "navbar-brand" to="/">Google Books</Link>

          <div className = "collapse navbar-collapse">
              <ul className = "nav navbar-nav">
                  <li className = "nav-item">
                      <Link 
                      className = {window.location.pathname === "/" ? "nav-link active" : "nav-link"} 
                      to = "/">Search</Link>
                  </li>
                  <li className = "nav-item">
                      <Link 
                      className = {window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} 
                      to = "/saved">Saved</Link>
                  </li>
              </ul>
          </div>
        </nav>
    )
}

export default Navbar;