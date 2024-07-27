import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Activity.css';
import ActivityDetail from '../ActivityDetail/ActivityDetail';

function Activity() {

    const [gotoDetail, setGotoDetail] = useState(false);
    const [activeTab, setActiveTab] = useState('Study');

    const titles = ['Study', 'Friendship', 'MT'];
    const images = [["/ActivityDetail-img/2024/Study/코딩테스트스터디2.jpg", "/ActivityDetail-img/2023/Study/퀴푸메인웹개발2.jpg", "/ActivityDetail-img/2023/Study/퀴푸메인웹개발3.jpg"],
    ["/ActivityDetail-img/2023/FriendShip/친목11.jpg", "/ActivityDetail-img/2023/FriendShip/친목1.jpg", "/ActivityDetail-img/2023/FriendShip/친목10.jpg"],
    ["/ActivityDetail-img/2023/MT/엠티3.jpg", "/ActivityDetail-img/2023/MT/엠티2.jpg", "/ActivityDetail-img/2023/MT/엠티1.jpg"]];

    return (
        <div className="activity-container">
            <h1 onClick={() => setGotoDetail(false)}>Activity</h1>
            {
                gotoDetail ?
                    <ActivityDetail activeTab={activeTab} setActiveTab={setActiveTab} />
                    :
                    <div className="activity-box">
                        <ActivityBlock title={titles[0]} src1={images[0][0]} src2={images[0][1]} src3={images[0][2]} setGotoDetail={setGotoDetail} setActiveTab={setActiveTab}></ActivityBlock>
                        <ActivityBlock title={titles[1]} src1={images[1][0]} src2={images[1][1]} src3={images[1][2]} setGotoDetail={setGotoDetail} setActiveTab={setActiveTab}></ActivityBlock>
                        <ActivityBlock title={titles[2]} src1={images[2][0]} src2={images[2][1]} src3={images[2][2]} setGotoDetail={setGotoDetail} setActiveTab={setActiveTab}></ActivityBlock>
                    </div>
            }
        </div>
    )
}

function ActivityBlock(props) {
    return (
        <div className="activity-block">
            <p className="activity-block__title" onClick={() => {
                props.setGotoDetail(true);
                props.setActiveTab(props.title);
            }}>{props.title}&nbsp; ›</p>
            <img className="activity-block__image--big" src={process.env.PUBLIC_URL + props.src1}></img>
            <img className="activity-block__image--small" src={process.env.PUBLIC_URL + props.src2}></img>
            <img className="activity-block__image--small" src={process.env.PUBLIC_URL + props.src3}></img>
        </div>
    )
}

export default Activity;