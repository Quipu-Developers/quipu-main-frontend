import './App.css';

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

      
    </div>
  );
}

export default App;