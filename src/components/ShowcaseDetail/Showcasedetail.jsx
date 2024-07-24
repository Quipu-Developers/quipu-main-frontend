import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Showcasedetail.css';
import { showcase_data } from './data_showcasedetail';

function Showcasedetail() {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.outerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="detail">

      <div className="detail_header">
        <h1>project name</h1>
        <hr></hr>
      </div>

      <main className="main">

        <div className="goal">
          <GoalCard goal={showcase_data[0].goal} />
          <br></br>
        </div>

        <div className="description">
          <div className="dc__container--img">
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/곽철이.png'} alt="활동사진" />
          </div>
          <DcCard 
            this_project={showcase_data[0].this_project} this_project_for={showcase_data[0].this_project_for} 
            web_url={showcase_data[0].web_url} github_url={showcase_data[0].github_url}
          />
        </div>

        <div className="history">
          <h1>History</h1>
          <div className="history-row1">
            <HistoryCard1 />
            {/* <HistoryCard2 /> */}
          </div>
          <div className="history-row2">
            <div className="history-row2-left">
              {/* <HistoryCard3 /> */}
              {/* <HistoryCard4 /> */}
            </div>
            <div className="histroy-row2-right">
              {/* <HistoryCard5 /> */}
            </div>

          </div>
          {/* <div className="history-row3-button">
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/js.png'} alt="javascript" />
          </div> */}
        </div>

      </main>


      {(windowWidth <= 900) && (
        <footer className="projectname">
          <p>Project Name</p>
        </footer>
      )}


    </div>

  )
}

function GoalCard({goal}) {
  return (
    <div className="goal-card">

      <h1>Goal</h1>
      <p>{goal}</p>

    </div>
  )
}

function DcCard({this_project, this_project_for, web_url, github_url}) {
  return (
    <div className="dc-card">

      <h1>This project...</h1>
      <p>{this_project}</p>

      <p style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <span>for</span>{this_project_for}
      </p>

      <div className="dccard-link">
        <button onClick={() => { window.open(web_url) }}>
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/link.png'} alt="link" />
        </button>
        <button onClick={() => { window.open(github_url) }}>
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/github.png'} alt="github" />
        </button>
      </div>
    </div>

  )
}

function HistoryCard1() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);


  if (windowWidth >= 900) { //pc 버전에서 배치
    return (
      <div className="history-card1">
        <div className="history-card1-img">
          <img className="HistoryImg1" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의1.jpg'} alt="회의1" />
          <img className="HistoryImg2" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의2.jpg'} alt="회의2"></img>
        </div>
        <div className="historybox-1">
          <div className="historybox-1-1">
            <h4>20xx.xx.xx</h4>
            <p>
              ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
              sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
            </p>
          </div>        
          <div className="historybox-1-2">
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/html.png'} alt="html 로고" />
            <p>
             non. malesuada In Lorem ipsum varius cursus at,
              est. non quis placerat at nibh ex. sit quam elementum
              odio diam Ut sit quam
            </p>
          </div>
        </div>
      </div>
    )
  }

  else { //모바일 버전에서 배치
    return (
      <div className="mobile-history-card1">
        <div className="mobile-history1-top">
          <div className="mobile-history1-left">
            <h4>20xx.xx.xx</h4>
            <p>
              ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
              sit eget non libero, adipiscing urna. urna. dui. tincidunt diam              
            </p>
          </div>
          <img className="mobile-history1-right" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의1.jpg'} alt="회의1" />
        </div>
        <div className="mobile-history1-middle">
          <img 
            src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/html.png'}
            onClick={()=>{window.open("https://html.com")}}
            alt="html 로고" 
          />
          <p>
            non. malesuada In Lorem ipsum varius cursus at,
            est. non quis placerat at nibh ex. sit quam elementum
            odio diam Ut sit quam
          </p>
        </div>
        <div className="mobile-history1-bottom">
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의2.jpg'} alt="회의2"></img>
        </div>
      </div>
    )
  }

}

function HistoryCard2() {
  return (
    <div className="history-card2">
      <div className="historybox-2">
        <h4>20xx.xx.xx</h4>
        <p style={{ textAlign: 'start', paddingLeft: '10px' }}>
          ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
          sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
        </p>
        <div className="historybox-2-1">
          <button onClick={() => { window.open("https://javascript.com") }}>
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/js.png'} alt="js logo" />
          </button>
          <button onClick={() => { window.open("https://css.com") }}>
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/css.png'} alt="css logo" />
          </button>
          <p>
            non. malesuada In Lorem ipsum varius cursus at, est.
            non quis placerat at nibh ex. sit quam elementum
            odio diam Ut sit quam
          </p>
        </div>
      </div>

      <div className="historybox-3">
        <img id="detail-overlay-image1" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/pin.png'} alt="pin" />
        <img id="detail-base-image1" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의3.jpg'} alt="회의3" />
      </div>
    </div>

  )
}

function HistoryCard3() {
  return (
    <div className="history-card3">
      <div className="historybox-4">
        <h4>20xx.xx.xx</h4>
        <p>ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
          sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
        </p>
        <div className="historybox-4-1">
          <p>
            non. malesuada In Lorem ipsum varius cursus at, est.
            non quis placerat at nibh ex. sit quam elementum
            odio diam Ut sit quam
          </p>
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/figma.png'} alt="figma logo"></img>
        </div>
      </div>
    </div>
  )
}

function HistoryCard4() {
  return (
    <div className="history-card4">
      <div className="historybox-5">
        <h4>20xx.xx.xx</h4>
        <p>
          ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
          sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
        </p>
        <p>
          non. malesuada In Lorem ipsum varius cursus at, est.
          non quis placerat at nibh ex. sit quam elementum
          odio diam Ut sit quam
        </p>
      </div>

      <div className="historybox-6">
        <img id="detail-overlay-image2" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/pin.png'} alt="pin" />
        <img id="detail-base-image2" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의4.jpg'} alt="회의4" />
      </div>
    </div>
  )
}


function HistoryCard5() {
  return (
    <div className="history-card5">
      <div className="historybox-7">
        <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의5.jpg'} alt="회의5" />
        <div className="historybox-8">
          <h4>20xx.xx.xx</h4>
          <p>
            ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
            sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
          </p>
          <p>
            non. malesuada In Lorem ipsum varius cursus at, est.
            non quis placerat at nibh ex. sit quam elementum
            odio diam Ut sit quam
          </p>
        </div>
      </div>
    </div>
  )
}

export default Showcasedetail;