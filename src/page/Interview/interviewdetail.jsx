import React from "react";
import './interviewdetail.css';

function InterviewDetail({ profile, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{profile.name}</h2>
        {profile && (
          <>
          <div className="modal-header">
            <img src={process.env.PUBLIC_URL + `/Interview-img/${profile.img}`} alt={profile.name} />
            <p>{profile.title}</p>
            <button className="modal-close" onClick={closeModal}>CLOSE</button>
            </div>
            <h3>자기소개</h3>
            <p>{profile.introduction}</p>
            <h3>활동후기</h3>
            <p>{profile.review}</p>
            <h3>프로젝트 이력</h3>
            <p>{profile.project.join(' ')}</p>  {/* join()을 통해서 한칸씩 띄어쓰기가 되게 렌더링 */}
          </>
        )}
      </div>
    </div>
  );
}

export default InterviewDetail;
