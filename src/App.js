/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Home from './components/Home'
import Activity from './components/Activity'
import RecommendSite from './components/RecommendSite'
import JoinQuipu from './components/JoinQuipu'


function App() {

  return (
    <div>
      <nav className="navbar">

        <div className="navbar__logo">
          <Link to="home" smooth={true} duration={400}>
            <img className="navbar__logo--img" src="/logo_main.png"></img>
          </Link>
        </div>

        <div className="navbar__menu">
          <ul className="navbar__menu--1">
            <li><Link to="home" smooth={true} duration={400} data-item='home'>home</Link></li>
            <li><Link to="activity" smooth={true} duration={400} data-item='activity'>activity</Link></li>
            <li><Link to="recommend-site" smooth={true} duration={400} data-item='recommend site'>recommend site</Link></li>
          </ul>
          <ul className="navbar__menu--2">
            <li><Link to="join-quipu" smooth={true} duration={400} data-item='join Quipu'>join Quipu</Link></li>
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