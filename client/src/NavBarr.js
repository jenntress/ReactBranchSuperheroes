import React from 'react';
import { Link } from 'react-router';


const NavigationBar = () =>
  <nav className="nav-flex navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/post">Add New Hero</Link>
        <Link to="/villains">Villains</Link>
        <Link to="/postvill">Add New Villain</Link>
      </ul>
  </nav>


  export default NavigationBar;
