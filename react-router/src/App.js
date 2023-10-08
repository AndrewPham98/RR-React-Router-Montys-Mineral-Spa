import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

function App() {

    const packages = [...]
  
    return (
      <div className="App">
        <Router>
            <header>
                <div className="navBar">
                    <ul>
                      <li>
                      <Link to="/">Home</Link>
                      </li>
                      <li>
                      <Link to="/about">About Us</Link>
                      </li>
                      <li>
                      <Link to="/packages">Our Packages</Link>
                      </li>
                    </ul>
                </div>
            </header>
        </Router>
      </div>
    );
}
  
  export default App;
