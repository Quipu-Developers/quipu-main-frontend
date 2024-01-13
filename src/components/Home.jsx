import React, { useEffect, useState } from 'react';
import Object3D1 from './Object3D1'
import Object3D2 from './Object3D2'
import '../App.css';

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

  //가로 700px임을 감지해서 다른 컴포넌트는 렌더링하기 위한 함수
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-container">

      {isSmallScreen ? (<Object3D2 />) : (<Object3D1 />)}

      <div className="main-container__message">
        <p className="main-container__message--sentence1">서울시립대학교 <br></br>컴퓨터 학술 동아리</p>
        <p className="main-container__message--sentence2">Hello, Quipu!</p>
      </div>
    </div>
  )
}

export default Home;