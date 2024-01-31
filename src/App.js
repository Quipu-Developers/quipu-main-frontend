/*eslint-disable*/
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

function App() {
  
  return (
    <Router>
      <nav className="navbar">

        <div className="navbar__logo">
          <NavLink to="/#home" smooth>
            <img className="navbar__logo--img" src="/logo_main.png"></img>
          </NavLink>
        </div>

        {/* pc에서 메뉴들 */}
        <div className="navbar__menu--pc">
          <ul>
            <li><NavLink to="/#home" smooth>home</NavLink></li>
            <li><NavLink to="/#about" smooth>about</NavLink></li>
            <li><NavLink to="/#activity" smooth>activity</NavLink></li>
            <li><NavLink to="/#recommend-site" smooth>recommend site</NavLink></li>
            <li><NavLink to="/#join-quipu" smooth>join Quipu</NavLink></li>
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
          <li className="block"><NavLink to="/home">home</NavLink></li>
          <li className="block"><NavLink to="/about">about</NavLink></li>
          <li className="block"><NavLink to="/activity">activity +</NavLink></li>
          <li className="block"><NavLink to="/activity-detail#Study">&nbsp;&nbsp;&nbsp;&nbsp;study</NavLink></li>
          <li className="block"><NavLink to="/activity-detail#Friendship">&nbsp;&nbsp;&nbsp;&nbsp;friendship</NavLink></li>
          <li className="block"><NavLink to="/activity-detail#MT">&nbsp;&nbsp;&nbsp;&nbsp;mt</NavLink></li>
          <li className="block"><NavLink to="/recommend-site">recommend site</NavLink></li>
          <li className="block"><NavLink to="/join-quipu">join Quipu</NavLink></li>
        </ul>

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

      </Routes>

    </Router>
  );
}

export default App;