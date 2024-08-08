import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { showcase_data } from '../../data/showcase_data.jsx';
import './ShowcasemainMobile.css';

function Dropdown({ setIndex }) { // setIndex를 props로 받음
  return (
    <>
      {showcase_data.map((item, idx) => (
        <li className="Dropdown-list" key={idx} onClick={() => { setIndex(idx) }}>
          {item.project_name} {/* item.project_name으로 변경 */}
        </li>
      ))}
    </>
  );
}

function ShowcasemainMobile() {


  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [index, setIndex] = useState(0);

  const handleIndexClick = () => {
    navigate(`/quipu-dev/${index}`);
};

  return (
    <div className="showcasemainMobile">
      <div className='showcasemainMobile-nav'>
      <section className="showcasemainMobile-logo"><NavLink to="/">QUIPU</NavLink></section>
      </div>
      <div className="showcasemainMobile-header">
        <div className="ShowcasemainMobile-arrow">
          <img src='../public/ShowcaseMain-img/arrowleft.png' alt="Arrow"/>
        </div>
        <ul
          className="ShowcasemainMobile-Dropdown"
          onClick={() => {
            setView(!view);
          }}
        >
          Drop down {view ? '⌃' : '⌄'}
          {view && <Dropdown setIndex={setIndex}/>} {/* setIndex를 Dropdown에 전달 */}
        </ul>
      </div>
      <div className="showcasemainMobile-main">
        <button
          onClick={handleIndexClick}
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
