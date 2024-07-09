import React from 'react';
import { NavLink } from 'react-router-dom';

function Dropdown(setSelectedPage) {
  return (
    <ul className="dropdown-menu">
      <li onClick={() => setSelectedPage('general')}>General</li>
      <li onClick={() => setSelectedPage('development')}>Development</li>
    </ul>
  );
}

export default Dropdown;