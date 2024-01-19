import React, { useState } from 'react';
import '../App.css';
import './activity.css';

function Activity() {
    const titles = ['Study', 'Friendship', 'MT'];
    const images = [["/img/mt1.jpg", "/img/mt1.jpg", "/img/mt1.jpg"], ["/img/mt1.jpg", "/img/mt1.jpg", "/img/mt1.jpg"], ["/img/mt1.jpg", "/img/mt1.jpg", "/img/mt1.jpg"]];

    return (
        <>
            <div className="blank-navbar"></div>
            <div className="activity-container">
                <ActivityBlock title={titles[0]} src1={images[0][0]} src2={images[0][1]} src3={images[0][2]}></ActivityBlock>
                <ActivityBlock title={titles[1]} src1={images[1][0]} src2={images[1][1]} src3={images[1][2]}></ActivityBlock>
                <ActivityBlock title={titles[2]} src1={images[2][0]} src2={images[2][1]} src3={images[2][2]}></ActivityBlock>
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