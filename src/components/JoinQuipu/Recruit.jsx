import './Recruit.css';

export default function Recruit({ setJoinquipu }) {
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
        <img src={process.env.PUBLIC_URL + '/kitty1.png'} alt="" />
        <p>
          퀴푸는 2학기를 맞아 8월 21일부터 새로운 회원을 모집합니다!<br></br>도전적인 개발
          프로젝트와 다양한 친목 활동이 준비되어 있으니 많은 관심 부탁드립니다.
        </p>
      </div>
      <div className="recruit-chat2">
        <p>자세한 모집 공고는 곧 안내드릴 예정입니다. 조금만 기다려 주세요!</p>
        <img src={process.env.PUBLIC_URL + '/kitty2.png'} alt="" />
      </div>
      <div className="recruit-close" onClick={() => setJoinquipu(false)}>
        ⛌
      </div>
    </div>
  );
}
