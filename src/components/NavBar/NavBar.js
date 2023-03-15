import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import { LINKS as links } from '../../global/LINKS';

export default function NavBar() {
  return (
    <nav className="row nav">
      <ul className="nav-list">
        <li className="nav-link">
          <Link to={links.home} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to={links.films} className="nav-link">
            Films
          </Link>
        </li>
      </ul>
    </nav>
  );
}
