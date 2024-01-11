/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Activity from './components/Activity'
import RecommendSite from './components/RecommendSite'

function App() {

  return (
    <Router>
      <div>
        <nav className="navbar">

          <div className="navbar__logo">
            <a href="#"><img className="navbar__logo--img" src="/logo_main.png"></img></a>
          </div>

          <div className="navbar__menu">
            <ul className="navbar__menu--1">
              <li><NavLink to="/" activeClassName="active" exact data-item='home'>home</NavLink></li>
              <li><NavLink to="/activity" activeClassName="active" data-item='activity'>activity</NavLink></li>
              <li><NavLink to="/recommend-site" activeClassName="active" data-item='recommend site'>recommend site</NavLink></li>
            </ul>
            <ul className="navbar__menu--2">
              <li><a href="#" data-item='join Quipu'>join Quipu</a></li>
            </ul>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/recommend-site" element={<RecommendSite />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;