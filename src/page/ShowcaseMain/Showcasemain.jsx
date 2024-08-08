import './Showcasemain.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { showcase_data } from '../../data/showcase_data.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowcasemainMobile from './showcaseMainMobile.jsx'; // ShowcasemainMobile 컴포넌트 임포트

function Showcasemain() {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const navigate = useNavigate();

    const handleIndexClick = () => {
        navigate(`/quipu-dev/${index}`);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 500);
    };

    useEffect(() => {
        // 윈도우 리사이즈 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);
        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) {
        return <ShowcasemainMobile />;
    }

    return (
        <div className='showcasemain-house'>
            <div className='showcasemain-container'>
                <div className='showcasemain-nav'>
                    <section className="showcasemain-logo"><NavLink to="/">QUIPU</NavLink></section>
                </div>
                <div className='showcasemain'>
                    <div className='section1'>
                        <div className='List' onClick={() => { setIndex(0) }}>{showcase_data[0].project_name}</div>
                        <div className='List' onClick={() => { setIndex(1) }}>{showcase_data[1].project_name}</div>
                        <div className='List' onClick={() => { setIndex(2) }}>{showcase_data[2].project_name}</div>
                        <div className='List' onClick={() => { setIndex(3) }}>{showcase_data[3].project_name}</div>
                        <div className='List' onClick={() => { setIndex(4) }}>{showcase_data[4].project_name}</div>
                        <div className='List' onClick={() => { setIndex(5) }}>{showcase_data[5].project_name}</div>
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
                            <div className='gallery3'>
                                <img src={showcase_data[index].main_img[1]} alt={`Image for ${showcase_data[index].project_name}`} />
                            </div>
                            <div className='gallery3'>
                                <div className='gallery3-text'>
                                    <h4>{showcase_data[index].goal}</h4>
                                    <p>{showcase_data[index].this_project}</p>
                                </div>
                            </div>
                            <div className='gallery3'>
                                <img src={showcase_data[index].main_img[2]} alt={`Image for ${showcase_data[index].project_name}`} />
                            </div>
                            <div className='gallery3'>
                                <img src={showcase_data[index].main_img[3]} alt={`Image for ${showcase_data[index].project_name}`} />
                            </div>
                        </div>
                        <div className='gallery'>
                            <div className='gallery4'>
                                <img src={showcase_data[index].main_img[4]} alt={`Image for ${showcase_data[index].project_name}`} />
                            </div>
                        </div>
                    </div>
                    <h4 
                        className="view-button"
                        onClick={handleIndexClick}
                    >
                        VIEW
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Showcasemain;
