import React from 'react';
import { Link } from 'react-router';


const NavigationBar = () =>
  <div>
    <nav>
      <ul className="nav-flex">
        <Link to="/">Home</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/post">Create Hero</Link>
      </ul>
    </nav>
  </div>

  export default NavigationBar;
