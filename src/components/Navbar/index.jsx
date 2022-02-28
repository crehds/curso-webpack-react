import React from 'react';
import './styles.css';

export function NavBar({ setAppContent }) {
  const handleOption = (event) => setAppContent(event.target.id);
  return (
    <nav className='navbar--container'>
      <ul className='options--wrapped'>
        <li id='home' onClick={handleOption}>
          Home
        </li>
        <li id='about' onClick={handleOption}>
          About Me
        </li>
        <li id='portfolio' onClick={handleOption}>
          Portfolio
        </li>
        <li id='contact' onClick={handleOption}>
          Contact
        </li>
      </ul>
    </nav>
  );
}
