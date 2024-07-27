import React from "react";
import './interviewdetail.css';

function InterviewDetail({ profile, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>곽곽이</h2>
        {profile && (
          <>
            <img src={process.env.PUBLIC_URL + `/Interview-img/${profile.img}`} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.title}</p>
          </>
        )}
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
}

export default InterviewDetail;
