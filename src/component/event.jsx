import { useNavigate } from 'react-router-dom';
import '../page/Event/Event.css';

export function RecruitBoard() {
  return (
    <div className="event-big-block">
      <p>8월 21일부터 퀴푸에서 새로운 회원을 모집합니다.</p>
      <p>
        <span>join quipu</span>에서 모집 공고를 확인할 수 있습니다.
      </p>
      <p>많은 관심 부탁드립니다!</p>
      <div className="event-recruit-table">
        {/* 첫번째 행 */}
        <div>
          <div>
            <p>개발부원</p>
          </div>
          <div>
            <p>일반부원</p>
          </div>
        </div>
        {/* 두번째 행 */}
        <div>
          <div>
            <p>UI/UX 디자인</p>
            <img />
            <p>프론트엔드</p>
            <img />
            <p>백엔드</p>
            <img />
          </div>
          <div>
            <p>컴퓨터를</p>
            <img />
            <p>를 사랑하는 모든 재학생</p>
          </div>
        </div>
      </div>
      <div className="recruit-quipu-info-block">
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
