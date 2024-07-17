import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Dropdown(props){
  return (
    <ul className="dropdown-menu">
      <li><NavLink to="/#join-quipu" onClick={() => props.setSelectedPage('general')}>General</NavLink></li>
      <li><NavLink to="/#join-quipu" onClick={() => props.setSelectedPage('development')}>Development</NavLink></li>
    </ul>
  );
}

export default Dropdown;