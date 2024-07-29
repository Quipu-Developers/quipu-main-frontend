import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Interview.css';
import { interview_data } from '../../data/interview_data.jsx';
import * as SolarIconSet from "solar-icon-set";
import InterviewDetail from './interviewdetail.jsx';

function Interview() {
  const navigate = useNavigate();
  const [IsdetailOpen, setIsdetailOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null); // 선택된 프로필 상태 추가

  const openDetailModal = (profile) => {
    setSelectedProfile(profile); // 클릭된 프로필 정보를 설정
    setIsdetailOpen(true);
  };

  const closeDetailModal = () => {
    setIsdetailOpen(false);
    setSelectedProfile(null); // 모달 닫을 때 선택된 프로필 초기화
  };

  return (
    <div className="interview-container">
      <div className="interview-navbar">
        <div className="interview-logo"><NavLink to="/#home" smooth>QUIPU</NavLink></div>
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
              <p onClick={(e) => {
                if (index < 3) {
                  setIndex(index + 1);
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
    index === 0 && interview_data[0].map(function (element) {
      return (
        <div className="interview-profilebox" key={element.name} onClick={() => openDetailModal(element)}>
          <div className="interview-profile-top">
            <SolarIconSet.MenuDots color="#233EC8" size={32} iconStyle="Broken" />
          </div>
          <div className="interview-profile-content">
            <div className="interview-profile-img">
              <img src={process.env.PUBLIC_URL + `/Interview-img/${element.img}`} alt={element.name} />
            </div>
            <div className="interview-profile-dc">
              <h4>{element.name}</h4>
              <p>{element.title}</p>
            </div>
          </div>
        </div>
      );
    })
  }
  {
    index === 1 && interview_data[1].map(function (element) {
      return (
        <div className="interview-profilebox" key={element.name} onClick={() => openDetailModal(element)}>
          <div className="interview-profile-top">
            <SolarIconSet.MenuDots color="#233EC8" size={32} iconStyle="Broken" />
          </div>
          <div className="interview-profile-content">
            <div className="interview-profile-img">
              <img src={process.env.PUBLIC_URL + `/Interview-img/${element.img}`} alt={element.name} />
            </div>
            <div className="interview-profile-dc">
              <h4>{element.name}</h4>
              <p>{element.title}</p>
            </div>
          </div>
        </div>
      );
    })
  }
  {
    index === 2 && interview_data[2].map(function (element) {
      return (
        <div className="interview-profilebox" key={element.name} onClick={() => openDetailModal(element)}>
          <div className="interview-profile-top">
            <SolarIconSet.MenuDots color="#233EC8" size={32} iconStyle="Broken" />
          </div>
          <div className="interview-profile-content">
            <div className="interview-profile-img">
              <img src={process.env.PUBLIC_URL + `/Interview-img/${element.img}`} alt={element.name} />
            </div>
            <div className="interview-profile-dc">
              <h4>{element.name}</h4>
              <p>{element.title}</p>
            </div>
          </div>
        </div>
      );
    })
  }
</div>
      {IsdetailOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <InterviewDetail profile={selectedProfile} closeModal={closeDetailModal} />
          </div>
        </div>
      )}

      <div className="interview-footer">
        <p>QUIPU-DEV</p>
      </div>
    </div>
  );
}

export default Interview;
