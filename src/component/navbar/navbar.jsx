import React, { useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function QuipuDevDropdown({ quipudevDropdown }) {
  return quipudevDropdown ? (
    <ul className="dropdown-box">
      <NavLink to="/quipu-dev" smooth>
        <li>Showcase</li>
      </NavLink>
      <NavLink to="/interview" smooth>
        <li>Interview</li>
      </NavLink>
    </ul>
  ) : null;
}

function JoinQuipuDropdown() {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate('/join-quipu', { state: { selectedPage: page } });
  };

  return (
    <ul className="dropdown-box">
      <li onClick={() => handleNavigation('general')}>일반 부원</li>
      <li onClick={() => handleNavigation('development')}>개발 부원</li>
    </ul>
  );
}

const Navbar = () => {
  const [quipudevDropdown, setQuipudevDropdown] = useState(false);
  const [joinquipuDropdown, setJoinquipuDropdown] = useState(false);
  const [isJoinQuipuVisible, setIsJoinQuipuVisible] = useState(false);
  const [isActivityDetailVisible, setIsActivityDetailVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
  };

  const closeMenu_joinQuipu_development = () => {
    setMenuOpen(false);
  };

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="home" smooth={true} duration={100} onClick={closeMenu}>
          <img
            className="navbar__logo--img"
            src={process.env.PUBLIC_URL + '/logo_main.png'}
            alt="logo"
          ></img>
        </Link>
      </div>

      {/* pc에서 메뉴들 */}
      <div className="navbar__menu--pc">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={100}>
              home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={100}>
              about
            </Link>
          </li>
          <li>
            <Link to="activity" smooth={true} duration={100}>
              activity
            </Link>
          </li>
          <li>
            <Link to="recommend-site" smooth={true} duration={100}>
              recommend site
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={100}>
              contact
            </Link>
          </li>
          <li
            onClick={() => {
              setQuipudevDropdown(!quipudevDropdown);
            }}
          >
            QUIPU-DEV
            <QuipuDevDropdown quipudevDropdown={quipudevDropdown} />
          </li>
          <li
            onClick={() => {
              setJoinquipuDropdown(!joinquipuDropdown);
            }}
          >
            JOIN QUIPU
            {joinquipuDropdown && <JoinQuipuDropdown />}
          </li>
        </ul>
      </div>

      {/* mobile에서 메뉴 버튼 */}
      <input id="menu-toggle" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
      <label className="menu-button" htmlFor="menu-toggle">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>

      {/* mobile에서 메뉴들 */}
      <div className={`navbar__menu--mobile ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li style={{ marginTop: '80px' }}>
            <Link to="home" smooth={true} duration={100} onClick={closeMenu}>
              home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={100} onClick={closeMenu}>
              about
            </Link>
          </li>
          <li>
            <div className="activity-menu">
              <Link to="activity" smooth={true} duration={100} onClick={closeMenu}>
                activity
              </Link>
              <input id="activity-toggle" type="checkbox" onChange={toggleActivityDetail} />
              <label className="activity-button" htmlFor="activity-toggle">
                <span className="line line4"></span>
                <span className="line line5"></span>
              </label>
            </div>
            <div className={`activity-detail-menu ${isActivityDetailVisible ? 'visible' : ''}`}>
              <li style={{ boxShadow: '0px 0px grey' }}>
                <NavLink to="/activity-detail#Study" onClick={closeMenu}>
                  &nbsp;&nbsp;&nbsp;&nbsp;study
                </NavLink>
              </li>
              <li style={{ boxShadow: '0px 0px grey' }}>
                <NavLink to="/activity-detail#Friendship" onClick={closeMenu}>
                  &nbsp;&nbsp;&nbsp;&nbsp;friendship
                </NavLink>
              </li>
              <li style={{ boxShadow: '0px 0px grey' }}>
                <NavLink to="/activity-detail#MT" onClick={closeMenu}>
                  &nbsp;&nbsp;&nbsp;&nbsp;mt
                </NavLink>
              </li>
            </div>
          </li>
          <li>
            <Link to="recommend-site" smooth={true} duration={100} onClick={closeMenu}>
              recommend site
            </Link>
          </li>
          <li>
            <div className="joinquipu-menu">
              <NavLink to="/join-quipu" onClick={closeMenu}>
                join quipu
              </NavLink>
              <input id="joinquipu-toggle" type="checkbox" onChange={toggleJoinQuipu} />
              <label className="joinquipu-button" htmlFor="joinquipu-toggle">
                <span className="line line4"></span>
                <span className="line line5"></span>
              </label>
            </div>
            <div className={`joinquipu-detail-menu ${isJoinQuipuVisible ? 'visible' : ''}`}>
              <li style={{ boxShadow: '0px 0px grey' }}>
                <NavLink to="/join-quipu#general" onClick={closeMenu_joinQuipu_general}>
                  &nbsp;&nbsp;&nbsp;&nbsp;일반 부원
                </NavLink>
              </li>
              <li style={{ boxShadow: '0px 0px grey' }}>
                <NavLink to="/join-quipu#development" onClick={closeMenu_joinQuipu_development}>
                  &nbsp;&nbsp;&nbsp;&nbsp;개발 부원
                </NavLink>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
