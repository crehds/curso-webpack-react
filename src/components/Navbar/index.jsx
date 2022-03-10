import React from 'react';
import './styles.css';

export function NavBar({ setAppContent }) {
  const handleOption = (event) => setAppContent(event.target.id);
  return (
    <nav className='navbar--container'>
      <ul className='options--wrapped'>
        <a id='home' onClick={handleOption}>
          Home
        </a>
        <a id='about' onClick={handleOption}>
          About Me
        </a>
        <a id='portfolio' onClick={handleOption}>
          Portfolio
        </a>
        <a id='contact' onClick={handleOption}>
          Contact
        </a>
      </ul>
    </nav>
  );
}
