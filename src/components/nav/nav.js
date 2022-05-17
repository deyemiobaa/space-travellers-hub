import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <header>
    <h1>Space Travelers' Hub</h1>
    <ul>
        <li>
            <Link to="/">Rockets</Link>
        </li>
        <li>
            <Link to="/MyProfil">My Profil</Link>
        </li>
        <li>
            <Link to="/Missions">Missions</Link>
        </li>
    </ul>
    </header>
  )
}

export default Nav;