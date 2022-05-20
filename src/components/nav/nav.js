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
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  </header>
);

export default Nav;
