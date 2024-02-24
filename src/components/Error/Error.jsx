import React from 'react';
import './Error.css'

function Error() {
    const goHome = () => {
        window.location.href = "/";
    };
    return (
        <div class="error-container">
            <div class="error-text-container">
                <h1>ERROR</h1>
                <h2>Page Not Found</h2>
                <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
                <p>존재하지 않는 주소를 입력하셨거나</p>
                <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
                <button onClick={goHome}>GO TO HOME</button>
            </div>
        </div>
    );
}

export default Error;