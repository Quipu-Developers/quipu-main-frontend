import { useEffect } from 'react';
import './Showcasedetail.css';
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { showcase_data } from '../../data/showcase_data';
import { useParams, useNavigate } from 'react-router-dom';

export default function Showcasedetail() {
  const { index } = useParams();

  useEffect(() => {
    const handleResize = () => console.log(window.outerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="showcasedetail-container">
      {/* 헤더 */}
      <div className="showcasedetail-header">
        <h1>{showcase_data[index].project_name}</h1>
      </div>
      <hr className="showcasedetail-header-border" />

      {/* 메인 */}
      <div className="showcasedetail-main">
        <div className="showcasedetail-main-upper">
          <GoalCard index={index} />
          <DcCard index={index} />
        </div>

        <div className="showcasedetail-main-lower">
          <h4>History</h4>
          <HistoryCard_1 index={index} />
        </div>
      </div>
    </div>
  );
}

export function GoalCard({ index }) {
  return (
    <div className="goal-container">
      <h4>Goal</h4>
      <p>{showcase_data[index].goal}</p>
    </div>
  )
}

export function DcCard({ index }) {
  const navigate = useNavigate();

  return (
    <div className="dc-container">
      <div className="dc-img-container">
        <img src={process.env.PUBLIC_URL + showcase_data[index].main_img[0]} />
      </div>
      <div className="dc-description-container">
        <h4>This project...</h4>
        <p>{showcase_data[index].this_project}</p>
        <p style={{marginBottom:'3%'}}>
          <span>for</span> {showcase_data[index].this_project_for}
        </p>
        <div className="dc-description-button">
          <div className="dc-button-container">
            <FiLink onClick={() => window.open(showcase_data[index].web_url)} />
          </div>
          <div className="dc-button-container">
            <FaGithub onClick={() => window.open(showcase_data[index].github_url)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HistoryCard_1({ index }) {
  const navigate = useNavigate();

  return (
    <div className="history__1-container">
      <div className="history__1-img">
        <img 
          className="history__1-img-base"
          src={process.env.PUBLIC_URL + showcase_data[index].main_img[0] } 
        />
        <img 
          className="history__1-img-overlay"
          src={process.env.PUBLIC_URL + showcase_data[index].main_img[1] } 
        />
      </div>

      <div className="history__1-card-container">
        <h4>{showcase_data[index].history[0].date}</h4>
        <p>{showcase_data[index].history[0].content[0]}</p>
        <div className="history__1-card-link">
          <FaHtml5 />
          <p>{showcase_data[index].history[0].content[1]}</p>
        </div>
      </div>
    </div>
  )
}