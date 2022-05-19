import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logo from './planet-logo.png';

const Nav = () => (
  <header>
    <img src={Logo} alt="logo" />
    <h1>
      Space Travelers&apos; Hub
    </h1>
    <ul>
      <li>
        <NavLink to="/" className="nav-active">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions" className="nav-active">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="nav-active">Profile</NavLink>
      </li>
    </ul>
  </header>
);

export default Nav;
