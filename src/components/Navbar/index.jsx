import React from 'react';
import './styles.css';

export function NavBar({ appContent, setAppContent, setActiveOptionNavBar }) {
  const handleOption = (event) => {
    const optionId = event.target.id;
    if (appContent === optionId) return null;

    setAppContent(optionId);
    setActiveOptionNavBar((prevState) => {
      const activeOption = document.getElementById(prevState);
      activeOption.classList.remove('active');
      return optionId;
    });
  };

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
