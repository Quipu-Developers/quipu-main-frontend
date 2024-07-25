import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import './Interview.css';
import { interview_data } from '../../data/interview_data.jsx';
import * as SolarIconSet from "solar-icon-set";

function Interview() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <div className="interview-container">
      <div className="interview-navbar">
        <div className="interview-logo"><NavLink to="/#home" smooth>QUIPU-DEV</NavLink></div>
        <p>Interview</p>
      </div>
      <div className="interview-index-container">
        <div className="interview-index">
          <div className="interview-left">
            {(index != 0) && <p>{index}기</p>}
          </div>
          <div className="interview-arrow">
            {
              (index != 0) &&
              <p onClick={(e)=> {
                if (index>0) {
                  setIndex(index-1);
                }
                e.stopPropagation();
              }}>&lt;</p>
            }
          </div>
          <div className="interview-middle">
            <h4>{index+1}기</h4>
          </div>
          <div className="interview-arrow">
            {
              (index != 2) &&
              <p onClick={(e)=> {
                if (index<3) {
                  setIndex(index+1);
                }
                e.stopPropagation();
              }}>&gt;</p>
            }
          </div>
          <div className="interview-right">
            {(index != 2) && <p>{index + 2}기</p>}
          </div>
        </div>
      </div>

      <div className="interview-profile">
        {
          interview_data[index].map(function (element) {
            return (
              <div className="interview-profilebox">
                <div className="interview-profile-top">
                  <SolarIconSet.MenuDots color="#233EC8" size={32} iconStyle="Broken" />
                </div>
                <div className="interview-profile-content">
                  <div className="interview-profile-img">
                    <img src={process.env.PUBLIC_URL + `/Interview-img/${element.img}`} />
                  </div>
                  <div className="interview-profile-dc">
                    <h4>{element.name}</h4>
                    <p>{element.title}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="interview-footer">
        <p>QUIPU-DEV</p>
      </div>


    </div>
  )
}



export default Interview;