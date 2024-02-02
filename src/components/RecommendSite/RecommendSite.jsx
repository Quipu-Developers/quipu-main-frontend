import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import '../../App.css';
import './RecommendSite.css';

function Icon({img, nameNoneHover, nameHover, link}){
    const [isListHover, setIsListHover] = useState(false);
    return (
        <div 
        onMouseOver = {() => setIsListHover(true)}
        onMouseOut = {() => setIsListHover(false)}
        className="recommend-site__icon" onClick={(e)=>{
            window.location.href = link;
        }}>
            <div className="recommend-site__icon--top1">
                <p style={{color: "#FF5F56", marginTop: "4px", marginLeft: "10px", fontSize: "10px"}}>●</p>
                <p style={{color: "#FEBC2E", marginLeft: "7px", marginTop: "4px",fontSize: "10px"}}>●</p>
                <p style={{color: "#28C840", marginLeft: "7px",marginTop: "4px", fontSize: "10px"}}>●</p>
            </div>
            <div className="recommend-site__icon--top2">
            </div>
            <div className="recommend-site__icon--body">
                <img src={img}/>
                <div className="recommend-site__icon--bodyText">
                    <div class="recommend-site__icon--textNonHover">{nameNoneHover}</div>
                    <div class="recommend-site__icon--textHover">{nameHover}</div>
                </div>
            </div>
        </div>
    );
}


function RecommendSite(){
    const [scrollPosition, setScrollPosition] = useState(0);

    return(
        <div 
            
        >
            <div className="blank-navbar"></div>
            <div className="recommend-site">
                <div className="recommend-site__title">Recommend Site</div>
                <div className="recommend-site__box">
                    <div className="recommend-site__box--top">
                        <Icon img="../RecommendSite-img/chatGPT.png" nameNoneHover="ChatGPT" nameHover="<br></br>AI 챗봇, 문서 작성 및 정보 검색 지원" link="https://chat.openai.com/"/>
                        <Icon img="../RecommendSite-img/leetCode.png" name="LeetCode" link="https://leetcode.com/"/>
                        <Icon img="../RecommendSite-img/hackerRank.png" name="HackerRank" link="https://www.hackerrank.com/"/>
                        <Icon img="../RecommendSite-img/w3Schools.png" name="W3 Schools" link="https://www.w3schools.com/"/>
                    </div>
                    <div className="recommend-site__box--bottom">
                        <Icon img="../RecommendSite-img/baekJoon.png" name="BaekJoon" link="https://www.acmicpc.net/"/>
                        <Icon img="../RecommendSite-img/replit.png" name="Replit" link="https://replit.com/"/>
                        <Icon img="../RecommendSite-img/computerWorld.png" name="Computer World" link="https://www.computerworld.com/"/>
                    </div>
                    
                </div>
                <div className="recommend-site__box--behind">
                    <div className="recommend-site__box--topBehind">
                        <Icon img="../RecommendSite-img/chatGPT.png" name="ChatGPT" link="https://chat.openai.com/"/>
                        <Icon img="../RecommendSite-img/hackerRank.png" name="HackerRank"/>
                        <Icon img="../RecommendSite-img/w3Schools.png" name="W3 Schools" link="https://www.w3schools.com/"/>
                        <Icon img="../RecommendSite-img/computerWorld.png" name="Computer World" link="https://www.computerworld.com/"/>
                    </div>
                    <div className="recommend-site__box--bottomBehind">
                        <Icon img="../RecommendSite-img/leetCode.png" name="LeetCode" link="https://leetcode.com/"/>
                        <Icon img="../RecommendSite-img/baekJoon.png" name="BaekJoon" link="https://www.acmicpc.net/"/>
                        <Icon img="../RecommendSite-img/replit.png" name="Replit" link="https://replit.com/"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendSite;