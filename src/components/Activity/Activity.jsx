import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../../App.css';
import './Activity.css';

function Activity() {
    const titles = ['Study', 'Friendship', 'MT'];
    const images = [["/Activity-img/파이썬스터디-min2.png", "/Activity-img/웹개발스터디-min2.jpg", "/Activity-img/공모전-min2.png"],
    ["/Activity-img/친목1-min2.jpg", "/Activity-img/친목2-min2.jpg", "/Activity-img/친목3-min2.jpg"],
    ["/Activity-img/mt1-min2.jpg", "/Activity-img/mt2-min2.jpg", "/Activity-img/mt3-min2.jpg"]];

    const defaultTab = 'Study';

    return (
        <>
            <div className="blank-navbar"></div>
            <div className="activity-container">
                <div className="activity-blocks-container">
                    <ActivityBlock title={titles[0]} src1={images[0][0]} src2={images[0][1]} src3={images[0][2]}></ActivityBlock>
                    <ActivityBlock title={titles[1]} src1={images[1][0]} src2={images[1][1]} src3={images[1][2]}></ActivityBlock>
                    <ActivityBlock title={titles[2]} src1={images[2][0]} src2={images[2][1]} src3={images[2][2]}></ActivityBlock>
                    <RouterLink to={{
                        pathname: "/activity-detail",
                        state: { activeTab: defaultTab }
                    }} className="more-button">more</RouterLink>
                </div>
            </div>
        </>
    )
}

function ActivityBlock(props) {
    return (
        <div className="activity-block">
            <p className="activity-block__title">{props.title}</p>
            <img className="activity-block__image--big" src={props.src1}></img>
            <img className="activity-block__image--small" src={props.src2}></img>
            <img className="activity-block__image--small" src={props.src3}></img>
        </div>
    )
}

export default Activity;