import React from "react";
import './interviewdetail.css';
import { IoCloseOutline } from "react-icons/io5";


function InterviewDetail({ index, profile, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {profile && (
          <>
            <div className="modal-header">
              <div className="modal-hearder-introduce">
              <img src={process.env.PUBLIC_URL + `/Interview-img/${profile.img}`} alt={profile.name} />
              <div className="header-name-text">
                <h2>{index+1}기 {profile.name}님</h2>
                <p>{profile.title}</p>
              </div>
              </div>
              <IoCloseOutline className="modal-close" onClick={closeModal}/>
            </div>
            <div className="modal-body">
              <h1>자기소개</h1>
              <p>{profile.introduction}</p>
              <h1>활동후기</h1>
              <p>{profile.review}</p>
              <h1>프로젝트 이력</h1>
              <p>{profile.project.join(' ')}</p>  {/* join()을 통해서 한칸씩 띄어쓰기가 되게 렌더링 */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InterviewDetail;
