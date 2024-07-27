import React, { useState, useEffect, useRef } from 'react';
import './Showcasemain.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import showcase_data from '../../data/showcase_data';
import ShowcaseDetail from '../ShowcaseDetail/Showcasedetail';


function Showcasemain() {
    const [Isshowcasedetail, setIsShowcasedetail] = useState(false);

    function handleShowcasedetail(){
        setIsShowcasedetail(true);
    }

    return (
        <div className='showcasemain-container'>
            <div className='showcasemain-nav'>
                <section className="showcasemain-logo"><NavLink to="/">QUIPU</NavLink></section>
            </div>
            <div className='showcasemain'>
                <div className='section1'>
                    <div className='List'>LIST</div>
                    <div className='List'>LIST</div>
                    <div className='List'>LIST</div>
                    <div className='List'>LIST</div>
                    <div className='List'>LIST</div>
                    <div className='List'>LIST</div>
                </div>
                <div className='section2'>
                    <div className='gallery'>
                        <div className="gallery1">
                        </div>
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
                <NavLink to="/showcase-detail" className="view-button">VIEW</NavLink>
            </div>
        </div>
    );
}
export default Showcasemain;