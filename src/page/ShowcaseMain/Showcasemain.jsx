import './Showcasemain.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import showcase_data from '../../data/showcase_data';
import ShowcaseDetail from '../ShowcaseDetail/Showcasedetail';

function Showcasemain() {
  const Isshowcasedetail = false;

  return (
    <div className="showcasemain-container">
      <div className="showcasemain-nav">
        <section className="showcasemain-logo">
          <NavLink to="/">QUIPU</NavLink>
        </section>
      </div>
      <div className="showcasemain">
        <div className="section1">
          <div className="List" onClick={() => {}}>
            LIST
          </div>
          <div className="List" onClick={() => {}}>
            LIST
          </div>
          <div className="List" onClick={() => {}}>
            LIST
          </div>
          <div className="List" onClick={() => {}}>
            LIST
          </div>
          <div className="List" onClick={() => {}}>
            LIST
          </div>
          <div className="List" onClick={() => {}}>
            LIST
          </div>
        </div>
        <div className="section2">
          <div className="gallery">
            <div className="gallery1"></div>
          </div>
          <div className="gallery">
            <div className="gallery2">QUIPU-DEV</div>
          </div>
          <div className="gallery">
            <div className="gallery3"></div>
            <div className="gallery3"></div>
            <div className="gallery3"></div>
            <div className="gallery3"></div>
          </div>
          <div className="gallery">
            <div className="gallery4"></div>
          </div>
        </div>
        <NavLink to="/showcase-detail" className="view-button">
          VIEW
        </NavLink>
      </div>
      {Isshowcasedetail && <ShowcaseDetail />}
    </div>
  );
}
export default Showcasemain;
