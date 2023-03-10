import React from 'react';
import './navbar.css';

export default function NavBar() {
  return (
    <nav className="row nav">
      <ul className="nav-list">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Films</li>
      </ul>
    </nav>
  );
}
