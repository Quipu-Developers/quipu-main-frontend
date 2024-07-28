import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ActivityDetail.css';
import Study from './Study/Study';
import FriendShip from './FriendShip/FriendShip';
import MT from './MT/MT';

function ActivityDetail({ activeTab, setActiveTab }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [selectedYear, setSelectedYear] = useState('2024');

  const navigate = useNavigate();

  return (
    <div className="ActivityDetail-container">
      <div className="ActivityDetail-titles">
        <button
          onClick={() => handleTabClick('Study')}
          style={{ color: activeTab === 'Study' ? '#5C518B' : 'white' }}
        >
          STUDY
        </button>
        <button
          onClick={() => handleTabClick('Friendship')}
          style={{ color: activeTab === 'Friendship' ? '#5C518B' : 'white' }}
        >
          FRIENDSHIP
        </button>
        <button
          onClick={() => handleTabClick('MT')}
          style={{ color: activeTab === 'MT' ? '#5C518B' : 'white' }}
        >
          MT
        </button>
        <select onChange={(e) => setSelectedYear(e.target.value)} className="year-dropdown">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <div className="ActivityDetail-content">
        <button className="back-button" onClick={() => navigate('/')}>
          &laquo;
        </button>
        <select onChange={(e) => setSelectedYear(e.target.value)} className="year-dropdown-mobile">
          <option>2024</option>
          <option>2023</option>
        </select>
        {activeTab === 'Study' && <Study selectedYear={selectedYear} />}
        {activeTab === 'Friendship' && <FriendShip selectedYear={selectedYear} />}
        {activeTab === 'MT' && <MT selectedYear={selectedYear} />}
      </div>
    </div>
  );
}

export default ActivityDetail;
