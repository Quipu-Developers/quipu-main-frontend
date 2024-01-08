/*eslint-disable*/

import './App.css';
import Object3D from './components/Object3D'

function App() {
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
        <Object3D></Object3D>
        <div className="main-container--message">
          <p style = {{fontSize: 30, fontWeight: 600}}>서울시립대학교 컴퓨터 학술 동아리</p>
          <p style = {{fontSize: 60, fontWeight: 700}}>Hello, QUIPU!</p>
        </div>
      </div>

    </div>
  );
}



export default App;