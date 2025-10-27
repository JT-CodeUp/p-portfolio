import React from "react";
import "./ProgressCircle.scss";

const ProgressCircle = ({ percentage, label, icon }) => {
  return (
    <div className="progress-container">
      <div className="circular-progress" style={{ "--percentage": percentage }}>
        <div className="progress-icon">{icon}</div>
      </div>
      <p className="progress-text">{percentage}%</p>
      <p className="progress-label">{label}</p>
    </div>
  );
};

export default ProgressCircle;