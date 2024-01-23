import React, { useState } from 'react';
import '../App.css';
import '../RecommendSite.css';
import '../activity.css';

function Icon({img, name, }){
    return (
        <div className="recommend-site__icon">
            <div className="recommend-site__icon--top1">
                <p style={{color: "red", marginTop: "4px", marginLeft: "10px", fontSize: "10px"}}>●</p>
                <p style={{color: "#ffd400", marginLeft: "7px", marginTop: "4px",fontSize: "10px"}}>●</p>
                <p style={{color: "#09ce20", marginLeft: "7px",marginTop: "4px", fontSize: "10px"}}>●</p>
            </div>
            <div className="recommend-site__icon--top2">
            </div>
            <div className="recommend-site__icon--body">
                <img src={img}></img>
                <p>{name}</p>
            </div>
        </div>
    );
}

function RecommendSite(){
    const [scrollPosition, setScrollPosition] = useState(0);

    return(
        <div>
            <div className="blank-navbar"></div>
            <div className="recommend-site">
                <div className="recommend-site__title">Recommend Site</div>
                <div className="recommend-site__box">
                    <div className="recommend-site__box--top">
                        <Icon img="../chatGPT.png" name="ChatGPT"/>
                        <Icon img="../leetCode.png" name="LeetCode"/>
                        <Icon img="../hackerRank.png" name="HackerRank"/>
                        <Icon img="../w3Schools.png" name="W3 Schools"/>
                    </div>
                    <div className="recommend-site__box--topBehind">
                        <Icon img="../chatGPT.png" name="ChatGPT"/>
                        <Icon img="../hackerRank.png" name="HackerRank"/>
                        <Icon img="../w3Schools.png" name="W3 Schools"/>
                        <Icon img="../computerWorld.png" name="Computer World"/>
                    </div>
                    <div className="recommend-site__box--bottom">
                        <Icon img="../baekJoon.png" name="BaekJoon"/>
                        <Icon img="../replit.png" name="Replit"/>
                        <Icon img="../computerWorld.png" name="Computer World"/>
                    </div>
                    <div className="recommend-site__box--bottomBehind">
                        <Icon img="../leetCode.png" name="LeetCode"/>
                        <Icon img="../baekJoon.png" name="BaekJoon"/>
                        <Icon img="../replit.png" name="Replit"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendSite;