import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import './ActivityDetail.css';
import Study from './Study/Study';
import FriendShip from './FriendShip/FriendShip';
import MT from './MT/MT';


function ActivityDetail() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('Study');

    useEffect(() => {
        if (location.state && location.state.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="blank-navbar"></div>
            <div className="ActivityDetail-container">
                <div className="ActivityDetail-titles">
                    <button onClick={() => handleTabClick('Study')}>STUDY</button>
                    <button onClick={() => handleTabClick('Friendship')}>FRIENDSHIP</button>
                    <button onClick={() => handleTabClick('MT')}>MT</button>
                </div>
                <div className="ActivityDetail-content">
                    {activeTab === 'Study' && <Study />}
                    {activeTab === 'Friendship' && <FriendShip />}
                    {activeTab === 'MT' && <MT />}
                </div>
            </div>
        </>
    )
}

export default ActivityDetail;