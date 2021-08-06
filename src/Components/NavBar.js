import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/Products"
      >
        Products  
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/Reviews"
      >
        Reviews  
      </NavLink>      
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/AboutUs"
      >
        About Us 
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/ContactUs"
      >
        Contact Us 
      </NavLink>
    </nav>
  );
}

export default NavBar;