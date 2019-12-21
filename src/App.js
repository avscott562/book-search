import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className = "navbar navbar-expand-md">
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
      
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
          <header>
            <div className = "jumbotron text-center">
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </div>
          </header>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            book search component
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
