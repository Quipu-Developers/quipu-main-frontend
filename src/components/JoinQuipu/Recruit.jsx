import { useState, useEffect } from 'react';
import './Recruit.css';

export default function Recruit({ setJoinquipu }) {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-08-21T00:00:00'); // 2024년 8월 21일 자정
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        일: Math.floor(difference / (1000 * 60 * 60 * 24)),
        시간: Math.floor((difference / (1000 * 60 * 60)) % 24),
        분: Math.floor((difference / 1000 / 60) % 60),
        초: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]}
        {interval}{' '}
      </span>
    );
  });
  return (
    <div className="recruit-container">
      <div className="recruit-title">
        <img
          src={process.env.PUBLIC_URL + '/hiring.png'}
          alt="Coming Soon"
          className="coming-soon-image"
        />
        <h1>Join Quipu</h1>
      </div>
      <div className="recruit-chat1">
        <img src={process.env.PUBLIC_URL + '/kitty2.png'} alt="" />
        <p>
          퀴푸는 2학기를 맞아 <span>8월 21일</span>부터 새로운 회원을 모집합니다!<br></br>도전적인
          개발 프로젝트와 다양한 친목 활동이 준비되어 있으니 많은 관심 부탁드립니다.
          <br></br>자세한 모집 공고는 곧 안내드릴 예정입니다. 조금만 기다려 주세요!
        </p>
      </div>
      <div className="recruit-chat2">
        <p>
          모집까지 앞으로 <br></br>
          {timerComponents.length && timerComponents}
        </p>
        <img src={process.env.PUBLIC_URL + '/kitty1.png'} alt="" />
      </div>
      <div className="recruit-close" onClick={() => setJoinquipu(false)}>
        ⛌
      </div>
    </div>
  );
}
