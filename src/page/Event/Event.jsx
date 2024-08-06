import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button, RecruitBoard } from '../../component/event';
import './Event.css';

export function Event() {
  const navigate = useNavigate();
  return (
    <div className="event-container">
      <div className="event-nav">
        <img
          src={process.env.PUBLIC_URL + '/logo_main.png'}
          onClick={() => navigate('/')}
          alt="로고"
        ></img>
      </div>
      <Outlet />
    </div>
  );
}

export function Start() {
  return (
    <>
      <h1>랜덤 룰렛 이벤트</h1>
      <div className="event-big-block">
        <div
          className="event-big-block-top"
          style={{
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p>새 학기를 맞이하여 특별한 이벤트를 준비했습니다! 퀴즈를 맞추고 룰렛을 돌리세요!</p>
        </div>
      </div>
      <div className="event-small-block-container">
        <div className="event-small-block">서울시립대 학부생 모두 참여가능합니다!</div>
        <div className="event-small-block">상품이 소진될 때까지 계속 됩니다!</div>
        <div className="event-small-block">상품 수령은 카카오톡을 통해 해드릴게요!</div>
      </div>
      <Button buttonName="START EVENT" path="/event/quiz" />
    </>
  );
}

export function Quiz() {
  return (
    <>
      <div className="event-big-block">
        <div
          className="event-big-block-top"
          style={{
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p>
            정답은 이 웹사이트 속에 있어요!
            <button>
              <img />
              퀴푸 웹 사이트 둘러보기
            </button>
          </p>
        </div>
        <h3 className="quiz-title">
          QUIZ. 퀴푸의 웹 개발팀 이름은 무엇일까요?
          <img />
        </h3>
        <div className="quiz-block">
          <div>1</div> QUIPU-CODE
        </div>
        <div className="quiz-block">
          <div>2</div> QUIPU-TECH
        </div>
        <div className="quiz-block">
          <div>3</div> QUIPU-DEV
        </div>
        <div className="quiz-block">
          <div>4</div> QUIPU-DEVELOPERS
        </div>
      </div>
      <div className="event-input-block">
        <label>학번: </label>
        <input></input>
      </div>
      <div className="event-input-block">
        <label>이름: </label>
        <input></input>
      </div>
      <p className="event-input-text">
        *중복 참여를 방지하기 위함입니다. 이벤트 종료 후 모두 삭제할 예정입니다.
      </p>
      <Button buttonName="정답은? false" path="/event/result" state="incorrect" />
      <Button buttonName="정답은? true" path="/event/roulette" />

      <div className="event-big-block">
        <h4>결과를 기다리고 있어요 . . .</h4>
        <img />
      </div>
    </>
  );
}

export function Result() {
  const location = useLocation();
  const result = location.state || {};

  let content;

  //오답일 경우
  if (result === 'incorrect') {
    content = (
      <>
        <div className="event-big-block-top">
          <p>정답은 3번! 퀴푸의 웹 개발팀 이름은 QUIPU-DEV 입니다!</p>
        </div>
        <div className="event-result-text">
          <img />
          <p>
            아쉽게도 정답이 아닙니다! <img />
          </p>
        </div>
      </>
    );
  }
  //정답이고 상품을 받을 경우
  else if (result === 'correct_win') {
    content = (
      <>
        <div className="event-big-block-top">
          <p>정답은 3번! 퀴푸의 웹 개발팀 이름은 QUIPU-DEV 입니다!</p>
        </div>
        <div className="event-result-text">
          <img />
          <p>
            축하합니다! <img />
          </p>
          <p>카카오톡 아이디를 남겨주시면 이벤트 종료 후 수령해드리겠습니다.</p>
          <div className="event-input-block">
            <label>카카오톡 ID: </label>
            <input></input>
          </div>
        </div>
      </>
    );
  }
  //정답이고 꽝일 경우
  else if (result === 'correct_lose') {
    content = (
      <>
        <div className="event-big-block-top">
          <p>정답은 3번! 퀴푸의 웹 개발팀 이름은 QUIPU-DEV 입니다!</p>
        </div>
        <div className="event-result-text">
          <img />
          <p>
            아쉽게도 꽝입니다!
            <img />
          </p>
        </div>
      </>
    );
  } else {
    content = <div className="event-big-block-top">결과를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      {content}
      <RecruitBoard />
      <Button buttonName="home으로 가기" path="/" />
    </>
  );
}

export function Roulette() {
  return (
    <>
      <div className="event-big-block-top">
        <p>정답은 3번! 퀴푸의 웹 개발팀 이름은 QUIPU-DEV 입니다!</p>
      </div>
      <p>정답입니다!</p>
      <div>
        <div></div>
        <p>치킨</p>
        <p>2</p>
      </div>
      <img />
      <Button buttonName="룰렛 돌리기 (당첨)" path="/event/result" state={'correct_win'} />
      <Button buttonName="룰렛 돌리기 (꽝)" path="/event/result" state={'correct_lose'} />
    </>
  );
}
