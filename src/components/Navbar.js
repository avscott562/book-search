import React from 'react';
import '../styles/navbar.css';

function Navbar() {

    return(
        <nav className = "navbar navbar-expand-md sticky-top">
          <div className="navbar-brand">Google Books</div>
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
              <li className = "nav-item">
                <a className="nav-link" href="#">Search</a>
              </li>
              <li className = "nav-item">
                <a className="nav-link" href="#">Saved</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;