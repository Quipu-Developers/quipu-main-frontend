/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Home from './components/Home/Home'
import Activity from './components/Activity/Activity'
import RecommendSite from './components/RecommendSite/RecommendSite'
import JoinQuipu from './components/JoinQuipu/JoinQuipu'

function App() {

  return (
    <div>
      <nav className="navbar">

        <div className="navbar__logo">
          <Link to="home" smooth={true} duration={400}>
            <img className="navbar__logo--img" src="/logo_main1.png"></img>
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
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button' htmlFor="menu-toggle">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>

        {/* mobile에서 메뉴들 */}
        <ul className="navbar__menu--mobile">
          <li className="blank"></li>
          <li className="block"><Link to="home" smooth={true} duration={500}>home</Link></li>
          <li className="block"><Link to="activity" smooth={true} duration={500}>activity</Link></li>
          <li className="block"><Link to="recommend-site" smooth={true} duration={500}>recommend site</Link></li>
          <li className="block"><Link to="join-quipu" smooth={true} duration={500}>join Quipu</Link></li>
        </ul>

      </nav>

      <section id="home">
        <JoinQuipu />
      </section>
      <section id="activity">
        <Activity />
      </section>
      <section id="recommend-site">
        <RecommendSite />
      </section>
      <section id="join-quipu">
        <Home />
      </section>

    </div>
  );
}

export default App;