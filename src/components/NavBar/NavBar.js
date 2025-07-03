import React from 'react';
import './NavBar.css';

function NavBar({ setSelected }) {
  return (
    <nav className="NavBar">
      <ul>
        <li><a href="#home" onClick={() => setSelected('home')}>Home</a></li>
        <li><a href="#work" onClick={() => setSelected('work')}>Work Experience</a></li>
        <li><a href="#travel" onClick={() => setSelected('travel')}>Travel Experience</a></li>
        <li><a href="#about" onClick={() => setSelected('about')}>About Me</a></li>
        <li><a href="#resume" onClick={() => setSelected('resume')}>Resume</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
