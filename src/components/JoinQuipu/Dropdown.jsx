import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Dropdown(props){
  return (
    <ul className="dropdown-menu">
      <li><NavLink to="/#join-quipu" onClick={() => props.setSelectedPage('general')}>일반 부원</NavLink></li>
      <li><NavLink to="/#join-quipu" onClick={() => props.setSelectedPage('development')}>개발 부원</NavLink></li>
    </ul>
  );
}

export default Dropdown;