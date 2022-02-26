import React from 'react';
import './styles.css';

export function NavBar() {
  return (
    <nav className='navbar--container'>
      <ul className='options--wrapped'>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
