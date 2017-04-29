import React from 'react';
import { Link } from 'react-router';


const NavigationBar = () =>
  <nav className="nav-flex">
      <ul>
        <Link className="linker" to="/">Home</Link>
        <Link className="linker" to="/heroes">Heroes</Link>
        <Link className="linker" to="/post">Add New Hero</Link>
        <Link className="linker" to="/villains">Villains</Link>
        <Link className="linker" to="/postvill">Add New Villain</Link>
      </ul>
  </nav>


  export default NavigationBar;
