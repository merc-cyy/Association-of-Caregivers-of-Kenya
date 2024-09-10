
import React from 'react';

import '../../styles/globals.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg">
      <ul className="navbar-custom">
        <li className="nav-item-custom">
          <Link to ="/">Home</ Link>
        </li>
        <li className="nav-item-custom">
          <Link to="/about-us" >About Us</ Link>
        </li>
        <li className="nav-item-custom">
          <Link to="/resources">Resources</ Link>
        </li>
        <li className="nav-item-custom">
          <Link to="/GetInvolved">Get Involved</ Link>
        </li>
        {/*<li className="nav-item-custom">
          <Link to="#">Contact Us</ Link>
        </li> */}
      </ul>
    </nav>
    );
};
export default Navbar;
