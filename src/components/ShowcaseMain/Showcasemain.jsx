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
                <div className='gallery'>
                    <div className="gallery1"></div>
                </div>
                <div className='gallery'>
                    <div className="gallery2">QUIPU-DEV</div>
                </div>
                <div className='gallery'>
                    <div className='gallery3'></div>
                    <div className='gallery3'></div>
                    <div className='gallery3'></div>
                    <div className='gallery3'></div>
                </div>
                <div className='gallery'>
                    <div className='gallery4'></div>
                </div>
            </div>

            <button className='view-button'></button>
        </div>
        </>
    );
}
export default Showcasemain;