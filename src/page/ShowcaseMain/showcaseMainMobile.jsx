import React, { useState, useEffect, useRef } from 'react';
import './ShowcasemainMobile.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Dropdown() {

    return (
        <>
            <li className='Dropdown-list'>LIST1</li>
            <li className='Dropdown-list'>LIST2</li>
        </>
    );
}

function ShowcasemainMobile() {

    const [view, setView] = useState(false);
    return (
        <div className='showcasemainMobile'>
            <div className='showcasemainMobile-header'>
                <div className='ShowcasemainMobile-arrow'>⬅️</div>
                <ul className="ShowcasemainMobile-Dropdown" onClick={() => { setView(!view) }}>
                    Drop down{" "}
                    {view ? '⌃' : '⌄'}
                    {view && <Dropdown />}
                </ul>
            </div>
            <div className='showcasemainMobile-main'>
                <button className='showcasemainMobile-main-view'>view</button>
                <div className='showcasemainMobile-main-card'></div>
            </div>

        </div>
    );
}
export default ShowcasemainMobile;