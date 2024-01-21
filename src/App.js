/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Home from './components/Home/Home'
import Activity from './components/Activity/Activity'
import RecommendSite from './components/RecommendSite/RecommendSite'
import JoinQuipu from './components/JoinQuipu/JoinQuipu'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">

        <div className="navbar__logo">
          <Link to="home" smooth={true} duration={400}>
            <img className="navbar__logo--img" src="/logo_main.png"></img>
          </Link>
        </div>

        {/* pc에서 메뉴들 */}
        <div className="navbar__menu--pc">
          <ul>
            <li><Link to="home" smooth={true} duration={400}>home</Link></li>
            <li><Link to="activity" smooth={true} duration={400}>activity</Link></li>
            <li><Link to="recommend-site" smooth={true} duration={400}>recommend site</Link></li>
            <li><Link to="join-quipu" smooth={true} duration={400}>join Quipu</Link></li>
          </ul>
        </div>

        {/* mobile에서 메뉴 버튼 */}
        <div className="hamburger" onClick={toggleMenu}>
          <div class="icon"></div>
        </div>

        {/* mobile에서 메뉴들 */}
        <div className={`navbar__menu--mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="home" smooth={true} duration={400}>home</Link></li>
            <li><Link to="activity" smooth={true} duration={400}>activity</Link></li>
            <li><Link to="recommend-site" smooth={true} duration={400}>recommend site</Link></li>
            <li><Link to="join-quipu" smooth={true} duration={400}>join Quipu</Link></li>
          </ul>
        </div>

      </nav>

      <section id="home">
        <Home />
      </section>
      <section id="activity">
        <Activity />
      </section>
      <section id="recommend-site">
        <RecommendSite />
      </section>
      <section id="join-quipu">
        <JoinQuipu />
      </section>

    </div>
  );
}

export default App;