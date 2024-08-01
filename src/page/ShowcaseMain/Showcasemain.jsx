import './Showcasemain.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { showcase_data } from '../../data/showcase_data.jsx';
import { useState } from 'react';


function Showcasemain() {
    const [index, setIndex] = useState(0);
    //useparameter로 index값을 받아와서 index값을 state로 저장

    return (
        <div className='showcasemain-container'>
            <div className='showcasemain-nav'>
                <section className="showcasemain-logo"><NavLink to="/">QUIPU</NavLink></section>
            </div>
            <div className='showcasemain'>
                <div className='section1'>
                    <div className='List' onClick={(e) => { setIndex(0) }}>LIST</div>
                    <div className='List' onClick={(e) => { setIndex(1) }}>LIST</div>
                    <div className='List' onClick={(e) => { setIndex(2) }}>LIST</div>
                    <div className='List' onClick={(e) => { setIndex(3) }}>LIST</div>
                    <div className='List' onClick={(e) => { setIndex(4) }}>LIST</div>
                    <div className='List' onClick={(e) => { setIndex(5) }}>LIST</div>
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
                            <div gallery3-text>
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
                        <div className='gallery4'><img src={showcase_data[index].main_img[4]} alt={`Image for ${showcase_data[index].project_name}`} /></div>
                    </div>
                </div>
                <NavLink
                    to={{
                        pathname: "/showcase-detail",
                        state:{index: {index}} // index 값을 state로 전달
                    }}
                    className="view-button"
                >
                    VIEW
                </NavLink>

            </div>
        </div>

    );
}
export default Showcasemain;
