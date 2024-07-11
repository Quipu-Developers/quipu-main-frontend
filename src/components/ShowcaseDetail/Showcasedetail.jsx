import React from 'react';
import './Showcasedetail.css';

function Showcasedetail() {

  return (
    <div className="detail">

      <div className="detail_header">
        <h1>Project Name</h1>
        <hr></hr>
      </div>

      <main className="main">

        <div className="goal">
          <GoalCard />
          <br></br>
        </div>

        <div className="description">
          <div className="dc__container--img">
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/곽철이.png'} alt="활동사진" />
          </div>
          <DcCard />
        </div>

        <div className="history">
          <h1>History</h1>
          <div className="history-row1">
            <HistoryCard1 />
            <HistoryCard2 />
          </div>
          <div className="history-row2">
            <div className="history-row2-left">
              <HistoryCard3 />
              <HistoryCard4 />
            </div>
            <div className="histroy-row2-right">
            </div>
          </div>
        </div>

      </main>

      {/* <footer className="footer">
      </footer> */}

    </div>

  )
}

function GoalCard() {
  return (
    <div className="goal-card">

      <h1>Goal</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled.
      </p>

    </div>
  )
}

function DcCard() {
  return (
    <div className="dc-card">

      <h1>This project...</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages.
      </p>

      <p style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <span>for</span> Lorem Ipsum is simply dummy text of the printing
      </p>

      <div className="dccard-link">
        <button onClick={() => { window.open("https://notion.com") }}>
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/link.png'} alt="link" />
        </button>
        <button onClick={() => { window.open("https://github.com") }}>
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/github.png'} alt="github" />
        </button>
      </div>
    </div>

  )
}

function HistoryCard1() {

  return (
    <div className="history-card1">
      <div className="history-card1-img">
        <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의1.jpg'} alt="회의1" />
      </div>
      <div className="historybox-1">
        <h4>20xx.xx.xx</h4>
        <p>
          ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
          sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
        </p>
        <div className="historybox-1-1">
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/html.png'} alt="html 로고" />
          <p>
            non. malesuada In Lorem ipsum varius cursus at,
            est. non quis placerat at nibh ex. sit quam elementum
            odio diam Ut sit quam
          </p>
        </div>
        <div className="historybox-1-2">
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의2.jpg'} alt="회의2"></img>
        </div>
      </div>
    </div>
  )
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
      
    </div>
  )
}

export default Showcasedetail;