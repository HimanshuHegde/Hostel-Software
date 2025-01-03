import React from 'react';
import '@/styles/profile.css';

export default function ProfilePage(){
  return (
    <div className="container">
      <div className="profile-section" role="region" aria-labelledby="profile-header">
        <div className="image-placeholder">
          <div className="circle"></div>
        </div>
        <h3 id="profile-header">John</h3>
        <p>4JK23AB110</p>
      </div>
      <div className="leave-section" role="region" aria-labelledby="leave-history-header">
        <h2 id="leave-history-header">
          Leave History
          <button className="apply-button" aria-label="Apply for leave">Apply Leave</button>
        </h2>
        <div className="row-container row-accepted">
          <span>Home visit</span>
          <span>22/12/2024 - 25/12/2024</span>
          <div className="status-container">
            <div className="status-symbol status-accepted" aria-hidden="true"></div>
            <div className="status-text">Accepted</div>
          </div>
        </div>
        <div className="row-container row-requested">
          <span>Home visit</span>
          <span>22/12/2024 - 25/12/2024</span>
          <div className="status-container">
            <div className="status-symbol status-requested" aria-hidden="true"></div>
            <div className="status-text">Requested</div>
          </div>
        </div>
        <div className="row-container row-rejected">
          <span>Home visit</span>
          <span>22/12/2024 - 25/12/2024</span>
          <div className="status-container">
            <div className="status-symbol status-rejected" aria-hidden="true"></div>
            <div className="status-text">Rejected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

