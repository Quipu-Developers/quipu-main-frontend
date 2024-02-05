import React, { useEffect, useState } from 'react';
import './About.css';

function About() {

    return (
        <>
            <div className="About-container">
                <div className="section-container">
                    <div className="about-section first">
                        <div className="about-section--content" style={{ justifyContent: 'end', alignItems: 'end' }}>
                            <p className="keyword-detail">아이디어를 마음껏 드러내고 실천에 옮깁니다</p>
                            <p className="keyword">Practice</p>
                        </div>
                    </div>
                    <div className="about-section second">
                        <div className="about-section--content" style={{ justifyContent: 'end', alignItems: 'start' }}>
                            <p className="keyword-detail">함께 협력하여 더 큰 목표를 바라봅니다</p>
                            <p className="keyword">Collaboration</p>
                        </div>
                    </div>
                    <div className="about-section third">
                        <div className="about-section--content" style={{ justifyContent: 'start', alignItems: 'end' }}>
                            <p className="keyword">Transmission</p>
                            <p className="keyword-detail">배운 것을 내면화하고 공유하여 지식의 가치를 높입니다</p>
                        </div>
                    </div>
                    <div className="about-section forth">
                        <div className="about-section--content" style={{ justifyContent: 'start', alignItems: 'start' }}>
                            <p className="keyword">Welcome!</p>
                            <p className="keyword-detail">퀴푸에서는 프로그래밍 언어 공부, 개발, 공모전 등 컴퓨터와 관련한 다양한 스터디를 개설하거나 스터디에 참여할 수 있습니다.<br></br>자유롭고 협력적인 분위기로 개개인이 성장할 수 있는 환경을 만들도록 노력하고 있습니다.<br></br> 컴퓨터에 관심있는 서울시립대 학우분들 모두 환영합니다!</p>
                        </div>
                    </div>
                    <div className="quipu-text">
                        <p>QUIPU</p>
                    </div>
                    <div className="leaders">
                        <p>회장 차준섭</p>
                        <p>부회장 하진혁</p>
                        <p>총무 정민욱</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;