import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="container my-5">
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
        </div>

        <div>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </div>
        <footer class="sticky-bottom mt-5 bg-secondary">Google Book Search</footer>
      </div>
    </Router>
  );
}

export default App;
