import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './Event.css';

export function Event() {
  return (
    <div className="event-container">
      <h3>QUIPU</h3>
      <Outlet />
    </div>
  );
}

export function Start() {
  return (
    <>
      <h1>랜덤 룰렛 이벤트</h1>
      <div className="event-start-img-container">
        <div className="event-start-img-container-top"></div>
      </div>
      <div className="event-start-description-container">
        <div className="event-start-description-block"></div>
        <div className="event-start-description-block"></div>
        <div className="event-start-description-block"></div>
      </div>
      <button>start event</button>
    </>
  );
}

export function Quiz() {
  return (
    <>
      <p>hhi</p>
    </>
  );
}
