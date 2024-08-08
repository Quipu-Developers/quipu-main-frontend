import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showcase_data } from '../../data/showcase_data.jsx';
import './ShowcasemainMobile.css';

function Dropdown() {
  return (
    <>
      <li className="Dropdown-list">LIST1</li>
      <li className="Dropdown-list">LIST2</li>
      <li className="Dropdown-list">LIST3</li>
      <li className="Dropdown-list">LIST4</li>
      <li className="Dropdown-list">LIST5</li>
      <li className="Dropdown-list">LIST6</li>
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
        <div className="ShowcasemainMobile-arrow"><img src='../public/ShowcaseMain-img/arrowleft.png'/></div>
        <ul
          className="ShowcasemainMobile-Dropdown"
          onClick={() => {
            setView(!view);
          }}
        > Drop down {view ? '⌃' : '⌄'}
          {view && <Dropdown />}
        </ul>
      </div>
      <div className="showcasemainMobile-main">
        <button 
          onClick={()=>navigate(`/quipu-dev/${index}`)}
        >
          view
        </button>
        <div className="showcasemainMobile-section1">
          <div className='showcasemainMobile-gallery1'>
          <img src={showcase_data[index].main_img[0]} alt={`Image for ${showcase_data[index].project_name}`} />
          </div>
        </div>
        <div className='showcasemainMobile-section2'></div>
        <div className='showcasemainMobile-section3'>
          <div className='showcasemainMobile-gallery3'>
          <img src={showcase_data[index].main_img[4]} alt={`Image for ${showcase_data[index].project_name}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowcasemainMobile;
