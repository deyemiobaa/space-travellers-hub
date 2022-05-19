import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Missions</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  </header>
);

export default Nav;
