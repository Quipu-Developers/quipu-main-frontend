/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './App.css';
import Home from './page/Home/Home'
import About from './page/About/About'
import Activity from './page/Activity/Activity'
import RecommendSite from './page/RecommendSite/RecommendSite'
import JoinQuipu from './page/JoinQuipu/JoinQuipu'
import ActivityDetail from './page/ActivityDetail/ActivityDetail'
import Showcasemain from './page/ShowcaseMain/Showcasemain'
import Showcasedetail from './page/ShowcaseDetail/Showcasedetail';
import Error from './page/Error/Error';
import Interview from './page/Interview/Interview';

function QuipuDevDropdown({ quipudevDropdown }) {
  return quipudevDropdown ? (
    <ul className='dropdown-box'>
      <NavLink to="/quipu-Dev" smooth><li>Showcase</li></NavLink>
      <NavLink to="/interview" smooth><li>Interview</li></NavLink>
    </ul>
  ) : null;
}

function JoinQuipuDropdown({setSelectedPage}) {
  return (
    <ul className="dropdown-box">
      <NavLink to="/#join-quipu" style={{border: '1.5px solid rgb(86, 127, 187, 0.5)', backgroundColor: '#EDF4FF', color:'#567FBB'}}><li onClick={() => setSelectedPage('general')}>일반 부원</li></NavLink>
      <NavLink to="/#join-quipu" style={{border: '1.5px solid rgb(86, 127, 187, 0.5)', color:'#567FBB'}}><li onClick={() => setSelectedPage('development')}>개발 부원</li></NavLink>
    </ul>
  );
}

function AppContent() {
  const [quipudevDropdown, setQuipudevDropdown] = useState(false);
  const [joinquipuDropdown, setJoinquipuDropdown] = useState(false);
  const [isJoinQuipuVisible, setIsJoinQuipuVisible] = useState(false);
  const [isActivityDetailVisible, setIsActivityDetailVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const location = useLocation();
  const isDetailPage = location.pathname === '/showcase-detail';
  const isShowcaseMainPage = location.pathname === '/quipu-Dev';
  const isInterveiwPage = location.pathname === '/interview';

  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar__menu--pc') && !event.target.closest('.dropdown-box')) {
      setQuipudevDropdown(false);
      setJoinquipuDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleActivityDetail = () => {
    setIsActivityDetailVisible(!isActivityDetailVisible);
  };

  const toggleJoinQuipu = () => {
    setIsJoinQuipuVisible(!isJoinQuipuVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeMenu_joinQuipu_general = () => {
    setMenuOpen(false);
    setSelectedPage('general')
  }

  const closeMenu_joinQuipu_development = () => {
    setMenuOpen(false);
    setSelectedPage('development')
  }

  function setScreenSize() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {

    setScreenSize();
  }, []);

  if (isError) {
    return <Error />;
  }

  return (

    <div basename={process.env.PUBLIC_URL}>
      {!isDetailPage && !isShowcaseMainPage && !isInterveiwPage && (
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
              <li onClick={() => { setQuipudevDropdown(!quipudevDropdown) }}>QUIPU-DEV<QuipuDevDropdown quipudevDropdown={quipudevDropdown} /></li>
              <li onClick={() => { setJoinquipuDropdown(!joinquipuDropdown) }}>JOIN QUIPU{joinquipuDropdown && <JoinQuipuDropdown selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}</li>
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
              <li>
                <div className="joinquipu-menu">
                  <NavLink to="/join-quipu" onClick={closeMenu}>join quipu</NavLink>
                  <input id="joinquipu-toggle" type="checkbox" onChange={toggleJoinQuipu} />
                  <label className='joinquipu-button' htmlFor="joinquipu-toggle">
                    <span className="line line4"></span>
                    <span className="line line5"></span>
                  </label>
                </div>
                <div className={`joinquipu-detail-menu ${isJoinQuipuVisible ? 'visible' : ''}`}>
                  <li style={{ boxShadow: '0px 0px grey' }}><NavLink to="/join-quipu#general" onClick={closeMenu_joinQuipu_general} >&nbsp;&nbsp;&nbsp;&nbsp;일반 부원</NavLink></li>
                  <li style={{ boxShadow: '0px 0px grey' }}><NavLink to="/join-quipu#development" onClick={closeMenu_joinQuipu_development} >&nbsp;&nbsp;&nbsp;&nbsp;개발 부원</NavLink></li>
                </div>
              </li>
            </ul>
          </div>
          <QuipuDevDropdown DropdownView={quipudevDropdown} />
        </nav>
      )}

      <Routes>
        <Route path="/" element={
          <>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>                <section id="activity"><Activity /></section>
            <section id="recommend-site"><RecommendSite /></section>
            <section id="join-quipu"><JoinQuipu selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></section>
            <section id="quipu-Dev"><Showcasemain /></section>
            <section id="interview"><Interview /></section>
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity-detail" element={<ActivityDetail />} />
        <Route path="/recommend-site" element={<RecommendSite />} />
        <Route path="/join-quipu" element={<JoinQuipu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
        <Route path="/quipu-Dev" element={<Showcasemain />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/showcase-detail" element={<Showcasedetail />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContent />
    </Router>
  )
}

export default App;