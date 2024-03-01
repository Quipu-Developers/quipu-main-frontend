import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const [selectedYear, setSelectedYear] = useState('2024');

    const navigate = useNavigate();

    return (
        <>
            <div className="blank-navbar-pc"></div>
            <div className="blank-navbar-mobile"></div>
            <div className="ActivityDetail-container">
                <div className="ActivityDetail-titles">
                    <button onClick={() => handleTabClick('Study')}
                        style={{ color: activeTab === 'Study' ? '#5C518B' : 'white' }}>STUDY</button>
                    <button onClick={() => handleTabClick('Friendship')}
                        style={{ color: activeTab === 'Friendship' ? '#5C518B' : 'white' }}>FRIENDSHIP</button>
                    <button onClick={() => handleTabClick('MT')}
                        style={{ color: activeTab === 'MT' ? '#5C518B' : 'white' }}>MT</button>
                    <select onChange={(e) => setSelectedYear(e.target.value)}
                        className="year-dropdown">
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                </div>
                <div className="ActivityDetail-content">
                    <button className='back-button' onClick={() => navigate(-1)}>&laquo;</button>
                    <select onChange={(e) => setSelectedYear(e.target.value)}
                        className="year-dropdown-mobile">
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                    {activeTab === 'Study' && <Study selectedYear={selectedYear} />}
                    {activeTab === 'Friendship' && <FriendShip selectedYear={selectedYear} />}
                    {activeTab === 'MT' && <MT selectedYear={selectedYear} />}
                </div>
            </div>
        </>
    )
}

export default ActivityDetail;