import React, { useEffect, useState } from 'react';
import './About.css';

function About() {

    return (
        <>
            <div className="About-container">
                <div className="section-container">
                    <div className="about-section first" style={{ justifyContent: 'end', alignItems: 'end' }}>
                        <div className="about-section--content" style={{ justifyContent: 'end', alignItems: 'end'}}>
                            <p>퀴푸는 혁신적인 아이디어를 창출하고 실현하는데 중점을 둡니다</p>
                            <p style={{ fontSize: '40px' }}>&#123; Creativity &#125;</p>
                        </div>
                    </div>
                    <div className="about-section second" style={{ justifyContent: 'end', alignItems: 'start' }}>
                        <div className="about-section--content" style={{ justifyContent: 'end', alignItems: 'start'}}>
                            <p>퀴푸는 함께 협력하여 더 큰 목표를 바라봅니다.</p>
                            <p style={{ fontSize: '40px' }}>&#123; Collaboration &#125;</p>
                        </div>

                    </div>
                    <div className="about-section third" style={{ justifyContent: 'start', alignItems: 'end' }}>
                        <div className="about-section--content" style={{ justifyContent: 'start', alignItems: 'end'}}>    
                            <p style={{ fontSize: '40px' }}>&#123; Transmission &#125;</p>
                            <p>퀴푸는 배운 것을 내면화하고 공유하여 지식의 가치를 높입니다.</p>
                        </div>
                    </div>
                    <div className="about-section forth" style={{ justifyContent: 'start', alignContent: 'start' }}>
                        <div className="about-section--content" style={{ justifyContent: 'start', alignItems: 'start'}}>
                            <p style={{ fontSize: '40px' }}>"Welcome, 퀴푸!"</p>
                            <p>퀴푸에서는 프로그래밍 언어 공부, 개발, 공모전 등 컴퓨터와 관련한 다양한 스터디를 개설하거나 스터디에 참여할 수 있습니다.<br></br>창의적이고 협력적인 분위기로 개개인이 성장할 수 있는 환경을 만들도록 노력하고 있습니다.<br></br> 컴퓨터에 관심있는 서울시립대 학우분 모두 환영합니다!</p>
                        </div>
                    </div>
                    <div className="quipu-text">
                        <p>QUIPU</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;