import React, { useState, useEffect } from 'react';
import './Showcasemain.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { showcase_data } from '../../data/showcase_data.jsx';
import { useNavigate } from 'react-router-dom';
import ShowcasemainMolile from './showcaseMainMobile.jsx';

function Showcasemain() {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const handleIndexClick = () => {
        navigate(`/quipu-dev/${index}`);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='showcasemain-house'>
            <div className='showcasemain-container'>
                <div className='showcasemain-nav'>
                    <section className="showcasemain-logo"><NavLink to="/">QUIPU</NavLink></section>
                </div>
                <div className='showcasemain'>
                    {windowWidth > 500 ? (
                        <>
                            <div className='section1'>
                                {Array(6).fill(null).map((_, i) => (
                                    <div key={i} className='List' onClick={() => setIndex(i)}>LIST</div>
                                ))}
                            </div>
                            <div className='section2'>
                                <div className='gallery'>
                                    <div className="gallery1">
                                        <img src={showcase_data[index].main_img[0]} alt={`Image for ${showcase_data[index].project_name}`} />
                                    </div>
                                </div>
                                <div className='gallery'>
                                    <div className="gallery2">
                                        <h3>{showcase_data[index].project_name}</h3>
                                    </div>
                                </div>
                                <div className='gallery'>
                                    {showcase_data[index].main_img.slice(1, 4).map((img, i) => (
                                        <div key={i} className='gallery3'>
                                            <img src={img} alt={`Image for ${showcase_data[index].project_name}`} />
                                        </div>
                                    ))}
                                    <div className='gallery3'>
                                        <div className='gallery3-text'>
                                            <h4>{showcase_data[index].goal}</h4>
                                            <p>{showcase_data[index].this_project}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='gallery'>
                                    <div className='gallery4'>
                                        <img src={showcase_data[index].main_img[4]} alt={`Image for ${showcase_data[index].project_name}`} />
                                    </div>
                                </div>
                            </div>
                            <h4 className="view-button" onClick={handleIndexClick}>VIEW</h4>
                        </>
                    ) : (
                        <div className='mobile-view'>
                            <ShowcasemainMolile/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Showcasemain;
