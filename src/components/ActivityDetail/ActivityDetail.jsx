import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'Study' || hash === 'Friendship' || hash === 'MT') {
          setActiveTab(hash);
        }
      }, [location.hash]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div id="blank-navbar"></div>
            <div className="ActivityDetail-container">
                <div className="ActivityDetail-titles">
                    <button onClick={() => handleTabClick('Study')}
                        style={{ color: activeTab === 'Study' ? '#5C518B' : 'white' }}>STUDY</button>
                    <button onClick={() => handleTabClick('Friendship')}
                        style={{ color: activeTab === 'Friendship' ? '#5C518B' : 'white' }}>FRIENDSHIP</button>
                    <button onClick={() => handleTabClick('MT')}
                        style={{ color: activeTab === 'MT' ? '#5C518B' : 'white' }}>MT</button>
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