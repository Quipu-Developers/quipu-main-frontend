import { useState, useEffect, useRef } from 'react';
import './Interview.css';
import { profile } from './interview_data';
import * as SolarIconSet from "solar-icon-set";

function InterviewDetail() {
  return (
    <div className="detail">
      <div className="InterviewDetail-header"></div>
      <div className="InterviewDetail-introduce"></div>
      <div className="InterviewDetail-after-activity"></div>
      <div className="InterviewDetail-career"></div>
    </div>
  );
}


function Interview() {

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const [index, setIndex] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.outerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <div className="interview-container">
      <div className="interview-navbar">
        <h4>QUIPU-DEV</h4>
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
              <p onClick={(e) => {
                if (index > 0) {
                  setIndex(index - 1);
                }
                e.stopPropagation();
              }}>&lt;</p>
            }
          </div>
          <div className="interview-middle">
            <h4>{index + 1}기</h4>
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
          profile[index].map(function (element) {
            return (
              <div className="interview-profilebox" onClick={() => setModalOpen(true)}>
                 {modalOpen &&
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                  if (e.target === modalBackground.current) {
                    setModalOpen(false);
                  }
                }}>
                  <div className={'modal-content'}>
                    <p>리액트로 모달 구현하기</p>
                    <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                      모달 닫기
                    </button>
                  </div>
                </div>
          }

                <div className="interview-profile-top">
                  <SolarIconSet.MenuDots color="#233EC8" size={32} iconStyle="Broken" />
                </div>
                <div className="interview-profile-content">
                  <div className="interview-profile-img">
                    <img src={process.env.PUBLIC_URL + element.imgUrl} />
                  </div>
                  <div className="interview-profile-dc">
                    <h4>{element.name}</h4>
                    <p>{element.readme}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="interview-pagination">
        <img src={process.env.PUBLIC_URL + '/Interview-img/arrow.png'} />
      </div>

      <div className="interview-footer">
        <p>QUIPU-DEV</p>
      </div>


    </div>
  )
}



export default Interview;