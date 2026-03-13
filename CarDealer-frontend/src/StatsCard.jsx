import React from "react";

const StatsCard = ({ title, value, color }) => {
  return (
    <div className="stat-card" style={{ background: color }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StatsCard;