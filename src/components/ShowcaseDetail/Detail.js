import React from 'react';
import './Detail.css';

function Detail(){
    
  return (
    <div className="detail">
  
      <header className="detail-header">
        <h1>Header</h1>
      </header>
  
      <hr id="detail-hr"></hr>
  
      <main className="main">
  
        <div className="goal">
          <GoalCard/>
          <br></br>
        </div>
  
        <div className="description">
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/곽철이.png'} alt="활동사진"/>
          <DcCard/>
        </div>
  
        <div className="history">
          <h1>History</h1>
          <div className="history-row1">
            <HistoryCard1 />
            <HistoryCard2 />
          </div>
        </div>
        
      </main>
  
      <footer className="footer">
      </footer>
  
    </div>
  
  )
}

function GoalCard(){
  return(
    <div className="goal-card">
      
      <h1>Goal</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled.
      </p>
  
    </div>
  )
}

function DcCard(){
  return(
    <div className="dc-card">
  
      <h1>This project...</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages.
      </p>
  
      <p>
        <span>for</span> Lorem Ipsum is simply dummy text of the printing
      </p>
  
      <div className="dccard-link">
          <button onClick={()=>{window.open("https://notion.com")}}>
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/link.png'} alt="link"/>
          </button> 
          <button onClick={()=>{window.open("https://github.com")}}>
            <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/github.png'} alt="github"/>
          </button>
      </div>
    </div>
  
  )
}

function HistoryCard1(){
    
  return(  
    <div className="history-card1">
      <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의1.jpg'} alt="회의1" />
      <div className="historybox-1">
        <h4>20xx.xx.xx</h4>
        <p>
          ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
          sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
        </p>
        <div className="historybox-2">
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/html.png'} alt="html 로고"/>
          <p>
            non. malesuada In Lorem ipsum varius cursus at,
            est. non quis placerat at nibh ex. sit quam elementum
            odio diam Ut sit quam
          </p>
        </div>
        <div className="historybox-3">
          <img src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의2.jpg'} alt="회의2"></img>
        </div>
      </div>
    </div>  
  )
}

function HistoryCard2(){
  return(
    <div className="history-card2">
      <div className="historybox-4">
        <h4>20xx.xx.xx</h4>
        <p style={{textAlign:'start', paddingLeft:'10px'}}>
          ac lacus, varius ipsum luctus lobortis, lacus elit. elit.
          sit eget non libero, adipiscing urna. urna. dui. tincidunt diam
        </p>
        <div className="historybox-5">
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

      <div className="historybox-6">
        <img id="detail-base-image" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/회의3.jpg'} alt="회의3"/>
        <img id="detail-overlay-image" src={process.env.PUBLIC_URL + '/ShowcaseDetail-img/pin.png'} alt="pin"/>
      </div>
    </div>

  )
}

export default Detail;