import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowcasemainMobile.css';

function Dropdown() {
  return (
    <>
      <li className="Dropdown-list">LIST1</li>
      <li className="Dropdown-list">LIST2</li>
    </>
  );
}

function ShowcasemainMobile() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="showcasemainMobile">
      <div className="showcasemainMobile-header">
        <div className="ShowcasemainMobile-arrow">⬅️</div>
        <ul
          className="ShowcasemainMobile-Dropdown"
          onClick={() => {
            setView(!view);
          }}
        >
          Drop down {view ? '⌃' : '⌄'}
          {view && <Dropdown />}
        </ul>
      </div>
      <div className="showcasemainMobile-main">
        <button 
          className="showcasemainMobile-main-view"
          onClick={()=>navigate(`/quipu-dev/${index}`)}
        >
          view
        </button>
        <div className="showcasemainMobile-main-card"></div>
      </div>
    </div>
  );
}
export default ShowcasemainMobile;
