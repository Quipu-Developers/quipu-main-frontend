/*eslint-disable*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Activity from './components/Activity/Activity'
import RecommendSite from './components/RecommendSite/RecommendSite'
import JoinQuipu from './components/JoinQuipu/JoinQuipu'
import ActivityDetail from './components/ActivityDetail/ActivityDetail'

// 스크롤 방지 함수
function disableScroll() {
  document.body.addEventListener('touchmove', preventDefault, { passive: false });
  // document.body.addEventListener('mousewheel', preventDefault, { passive: false });
  // 필요하다면 onclick 이벤트도 추가하세요.
}

// 스크롤 방지 해제 함수
function enableScroll() {
  document.body.removeEventListener('touchmove', preventDefault);
  // document.body.removeEventListener('mousewheel', preventDefault);
  // 필요하다면 onclick 이벤트도 제거하세요.
}

// 기본 이벤트를 막는 함수
function preventDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}

function App() {

  disableScroll();

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
          <li className="block"><NavLink to="/#home" smooth>home</NavLink></li>
          <li className="block"><NavLink to="/#about" smooth>about</NavLink></li>
          <li className="block"><NavLink to="/#activity" smooth>activity</NavLink></li>
          <li className="block"><NavLink to="/#recommend-site" smooth>recommend site</NavLink></li>
          <li className="block"><NavLink to="/#join-quipu" smooth>join Quipu</NavLink></li>
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
        <Route path="/activity-detail" element={<ActivityDetail />} />
      </Routes>

    </Router>
  );
}

export default App;