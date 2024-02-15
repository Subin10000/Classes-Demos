import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
import Store from './components/store/Store';


function App() {
 return (
    <Router>
      <div>
        <nav className='navbar'>
            <li>
              <Link className='nav-items' to="/">Home</Link>
            </li>
            <li>
              <Link className='nav-items' to="/store">Store</Link>
            </li>
            <li>
              <Link className='nav-items' to="/todo">About</Link>
            </li>
        </nav>
 
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<Home />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;
