/*eslint-disable*/
// test code
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Activity from './components/Activity/Activity'
import RecommendSite from './components/RecommendSite/RecommendSite'
import JoinQuipu from './components/JoinQuipu/JoinQuipu'
import ActivityDetail from './components/ActivityDetail/ActivityDetail'
import Showcasemain from './components/ShowcaseMain/Showcasemain'
import Showcasedetail from './components/ShowcaseDetail/Showcasedetail';
import Error from './components/Error/Error';

function App() {
  const [isActivityDetailVisible, setIsActivityDetailVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const toggleActivityDetail = () => {
    setIsActivityDetailVisible(!isActivityDetailVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  function setScreenSize() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {

    setScreenSize();

    // fetch('/some-api-endpoint')
    //   .then(response => {
    //     if (!response.ok) {
    //       if ((response.status >= 400 && response.status !== 400 && response.status < 500) || (response.status >= 500)) {
    //         throw new Error('Server error');
    //       }
    //     }
    //   })
    //   .catch(() => setIsError(true));

  }, []);

  if (isError) {
    return <Error/>;
  }

  return (

        <Router basename={process.env.PUBLIC_URL}>
          <nav className="navbar">

            <div className="navbar__logo">
              <NavLink to="/#home" onClick={closeMenu} smooth>
                <img className="navbar__logo--img" src={process.env.PUBLIC_URL + "/logo_main.png"}></img>
              </NavLink>
            </div>

            {/* pc에서 메뉴들 */}
            <div className="navbar__menu--pc">
              <ul>
                <li><NavLink to="/#home" smooth>home</NavLink></li>
                <li><NavLink to="/#about" smooth>about</NavLink></li>
                <li><NavLink to="/#activity" smooth>activity</NavLink></li>
                <li><NavLink to="/#recommend-site" smooth>recommend site</NavLink></li>
                <li><NavLink to="/join-quipu">join Quipu</NavLink></li>
                <li><NavLink to="/quipu-Dev">quipu Dev</NavLink></li>
              </ul>
            </div>

            {/* mobile에서 메뉴 버튼 */}
            <input id="menu-toggle" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
            <label className='menu-button' htmlFor="menu-toggle">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </label>

            {/* mobile에서 메뉴들 */}
            <div className={`navbar__menu--mobile ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li style={{ marginTop: '80px' }}><NavLink to="/home" onClick={closeMenu}>home</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>about</NavLink></li>
                <li>
                  <div className="activity-menu">
                    <NavLink to="/activity" onClick={closeMenu}>activity</NavLink>
                    <input id="activity-toggle" type="checkbox" onChange={toggleActivityDetail} />
                    <label className='activity-button' htmlFor="activity-toggle">
                      <span className="line line4"></span>
                      <span className="line line5"></span>
                    </label>
                  </div>
                  <div className={`activity-detail-menu ${isActivityDetailVisible ? 'visible' : ''}`}>
                    <li style={{ boxShadow: '0px 0px grey' }}><NavLink to="/activity-detail#Study" onClick={closeMenu}>&nbsp;&nbsp;&nbsp;&nbsp;study</NavLink></li>
                    <li style={{ boxShadow: '0px 0px grey' }}><NavLink to="/activity-detail#Friendship" onClick={closeMenu}>&nbsp;&nbsp;&nbsp;&nbsp;friendship</NavLink></li>
                    <li style={{ boxShadow: '0px 0px grey' }}><NavLink to="/activity-detail#MT" onClick={closeMenu}>&nbsp;&nbsp;&nbsp;&nbsp;mt</NavLink></li>
                  </div>
                </li>
                <li><NavLink to="/recommend-site" onClick={closeMenu}>recommend site</NavLink></li>
                <li style={{ marginBottom: '80px' }}><NavLink to="/join-quipu" onClick={closeMenu}>join Quipu</NavLink></li>
              </ul>
            </div>

          </nav>

          <Routes>
            <Route path="/" element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="activity"><Activity /></section>
                <section id="recommend-site"><RecommendSite /></section>
                <section id="join-quipu"><JoinQuipu /></section>
              </>
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/activity-detail" element={<ActivityDetail />} />
            <Route path="/recommend-site" element={<RecommendSite />} />
            <Route path="/join-quipu" element={<JoinQuipu />} />
            <Route path="/quipu-Dev" element={<Showcasemain/>} />
            <Route path="/showcase-detail" element={<Showcasedetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
  );
}

export default App;