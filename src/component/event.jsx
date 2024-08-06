import { useNavigate } from 'react-router-dom';
import '../page/Event/Event.css';

export function RecruitBoard() {
  return (
    <div className="event-big-block">
      <div className="event-recruit-description">
        <p>8월 21일부터 퀴푸에서 새로운 회원을 모집합니다.</p>
        <p>
          <span>join quipu</span>에서 모집 공고를 확인할 수 있습니다.
        </p>
        <p>많은 관심 부탁드립니다!</p>
      </div>
      <div className="event-recruit-table">
        {/* 첫번째 행 */}
        <div className="event-recruit-table row">
          <div style={{ backgroundColor: 'rgb(255, 180, 194, 0.4)' }}>
            <p>개발부원</p>
          </div>
          <div style={{ backgroundColor: 'rgb(54, 194, 206, 0.5)' }}>
            <p>일반부원</p>
          </div>
        </div>
        {/* 두번째 행 */}
        <div className="event-recruit-table row">
          <div style={{ backgroundColor: 'rgb(255, 180, 194, 0.2)' }}>
            <p>UI/UX 디자인</p>
            <img />
            <p>프론트엔드</p>
            <img />
            <p>백엔드</p>
            <img />
          </div>
          <div style={{ backgroundColor: 'rgb(54, 194, 206, 0.3)' }}>
            <p>컴퓨터</p>
            <img />
            <p>를 사랑하는 모든 재학생</p>
          </div>
        </div>
      </div>
      <div className="event-recruit-info">
        <div>
          <img />
          <p>@uos_quipu</p>
        </div>
        <div>
          <img />
          <p>quipu0316@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export function Button({ buttonName, path, state = null }) {
  const navigate = useNavigate();
  console.log(state);
  return (
    <button
      onClick={() => {
        navigate(path, { state: state });
      }}
      className="event-custom-button"
    >
      <p>{buttonName}</p>
    </button>
  );
}
