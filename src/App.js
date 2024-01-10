/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import './App.css';
import Object3D1 from './components/Object3D1'
import Object3D2 from './components/Object3D2'

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);

  //가로 480px임을 감지해서 다른 컴포넌트는 렌더링하기 위한 함수
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      <nav className="navbar">
        <div className="navbar__logo">
          <a href="#"><img className="navbar__logo--img" src="/logo_main.png"></img></a>
        </div>
        <ul className="navbar__menu">
          <li><a href="#">home</a></li>
          <li><a href="#">activity</a></li>
          <li><a href="#">recommend site</a></li>
          <li><a href="#">join Quipu</a></li>
        </ul>
      </nav>

      <div className = "main-container">

        {isSmallScreen ? ( <Object3D2 /> ) : ( <Object3D1 /> )}

        <div className="main-container__message">
          <p className="main-container__message--sentence1">서울시립대학교 <br></br>컴퓨터 학술 동아리</p>
          <p className="main-container__message--sentence2">Hello, QUIPU!</p>
        </div>
      </div>

    </div>
  );
}

export default App;