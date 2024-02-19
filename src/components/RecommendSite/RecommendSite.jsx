import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import './RecommendSite.css';

// pc 아이콘
function Icon({ img, name, link, exp }) {
    const [isListHover, setIsListHover] = useState(false);

    return (
        <div
            onMouseOver={() => setIsListHover(true)}
            onMouseOut={() => setIsListHover(false)}
            className="recommend-site__icon"
            onClick={(e) => {
                window.open(link, '_blank');
            }}>
            <div className="recommend-site__icon--top1">
                <p style={{ color: "#FF5F56", marginTop: "4px", marginLeft: "10px", fontSize: "10px" }}>●</p>
                <p style={{ color: "#FEBC2E", marginLeft: "7px", marginTop: "4px", fontSize: "10px" }}>●</p>
                <p style={{ color: "#28C840", marginLeft: "7px", marginTop: "4px", fontSize: "10px" }}>●</p>
            </div>
            <div className="recommend-site__icon--top2">
            </div>
            <div className="recommend-site__icon--body">
                <img width="60px" height="60px" src={img || ''} alt={name}></img>
                <p style={{ fontSize: "15px", fontWeight: 'bold', margin: "5px" }}>{name}</p>
                {isListHover ? <p className="hover-text">what?<br></br>{exp}</p> : null}
            </div>
        </div>
    );
}

//mobile 아이콘
function Icon2({ img, name, link, exp, index, scrollPosition }) {
    const [isListHover, setIsListHover] = useState(false);
    const multiplier = index % 2 === 0 ? -0.1 : 0.1;
    const movement = scrollPosition * multiplier;

    return (
        <div
            onMouseOver={() => setIsListHover(true)}
            onMouseOut={() => setIsListHover(false)}
            className="recommend-site__icon"
            style={{ transform: `translateX(${movement}px)` }}
        >
            <div className="recommend-site__icon--top1">
                <p style={{ color: "#FF5F56", marginTop: "4px", marginLeft: "10px", fontSize: "10px" }}>●</p>
                <p style={{ color: "#FEBC2E", marginLeft: "7px", marginTop: "4px", fontSize: "10px" }}>●</p>
                <p style={{ color: "#28C840", marginLeft: "7px", marginTop: "4px", fontSize: "10px" }}>●</p>
            </div>
            <div className="recommend-site__icon--top2">
            </div>
            <div className="recommend-site__icon--body">
                <img width="60px" height="60px" src={img || ''} alt={name}></img>
                <p onClick={(e) => {
                    window.open(link, '_blank');
                }}>{name}</p>
                {isListHover ? <p className="hover-text">what?<br></br>{exp}</p> : null}
            </div>
        </div>
    );
}


function RecommendSite() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        setScrollPosition(prevPosition => prevPosition + 1);
        setScrollPosition(prevPosition => prevPosition - 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="blank-navbar-pc"></div>
            <div className="blank-navbar-mobile"></div>
            <div className="recommend-site">
                <div className="recommend-site__title">Recommend Site</div>
                <div className="recommend-site__container">
                    <div className="recommend-site__box">
                        <div className="recommend-site__box--top">
                            <Icon img="../RecommendSite-img/chatGPT.png" name="ChatGPT" exp="AI 챗봇, 문서 작성 및 정보 검색 지원" link="https://chat.openai.com/" />
                            <Icon img="../RecommendSite-img/leetCode.png" name="LeetCode" exp="코딩 인터뷰 특화, 기술 기업 스타일 문제 사이트" link="https://leetcode.com/" />
                            <Icon img="../RecommendSite-img/hackerRank.png" name="HackerRank" exp="코딩 테스트 중심의 실무 기술 평가 사이트" link="https://www.hackerrank.com/" />
                            <Icon img="../RecommendSite-img/w3Schools.png" name="W3 Schools" exp="웹 개발 학습 자료 제공 사이트" link="https://www.w3schools.com/" />
                        </div>
                        <div className="recommend-site__box--bottom">
                            <Icon img="../RecommendSite-img/baekJoon.png" name="BaekJoon" exp="알고리즘 문제 풀이 경쟁 사이트" link="https://www.acmicpc.net/" />
                            <Icon img="../RecommendSite-img/replit.png" name="Replit" exp="코드 작성 및 실행 가능한 온라인 플랫폼" link="https://replit.com/" />
                            <Icon img="../RecommendSite-img/computerWorld.png" name="Computer World" exp="IT 최신 뉴스 및 인사이트 제공 사이트" link="https://www.computerworld.com/" />
                        </div>
                    </div>
                </div>
                <div className="recommend-site__container--behind">
                    <div className="recommend-site__box--behind">
                        <Icon2 
                        key={1}
                        index={1}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/chatGPT.png" name="ChatGPT" exp="AI 챗봇, 문서 작성 및 정보 검색 지원" link="https://chat.openai.com/" />
                        
                        <Icon2 
                        key={2}
                        index={2}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/leetCode.png" name="LeetCode" exp="코딩 인터뷰 특화, 기술 기업 스타일 문제 사이트" link="https://leetcode.com/" />

                        <Icon2 
                        key={3}
                        index={3}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/hackerRank.png" name="HackerRank" exp="코딩 테스트 중심의 실무 기술 평가 사이트" link="https://www.hackerrank.com/" />

                        <Icon2 
                        key={4}
                        index={4}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/w3Schools.png" name="W3 Schools" exp="웹 개발 학습 자료 제공 사이트" link="https://www.w3schools.com/" />

                        <Icon2 
                        key={5}
                        index={5}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/baekJoon.png" name="BaekJoon" exp="알고리즘 문제 풀이 경쟁 사이트" link="https://www.acmicpc.net/" />

                        <Icon2 
                        key={6}
                        index={6}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/replit.png" name="Replit" link="https://replit.com/" />

                        <Icon2 
                        key={7}
                        index={7}
                        scrollPosition={scrollPosition}
                        img="../RecommendSite-img/computerWorld.png" name="Computer World" exp="IT 최신 뉴스 및 인사이트 제공 사이트" link="https://www.computerworld.com/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendSite;