import React, { useState, useEffect, useRef } from 'react';
import './Showcasemain.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Showcasemain() {

    return (
        <>
        <div className='showcasemain-nav'>
        <section className="showcasemain-logo"><NavLink to="/#home" smooth>quipu-logo</NavLink></section>
        </div>
        <div className='showcasemain'>
            <div className='section1'>
                <div className='List'>List</div>
                <div className='List'>List</div>
                <div className='List'>List</div>
                <div className='List'>List</div>
                <div className='List'>List</div>
            </div>
            <div className='section2'>
                <div className='gallery'></div>
                <div className='gallery'></div>
                <div className='gallery'></div>
                <div className='gallery'></div>
            </div>

            <button className='view-button'></button>
        </div>
        </>
    );
}
export default Showcasemain;