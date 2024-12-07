import React from "react";

const Filters = ({ onToggleFilter }) => {
  return (
    <div className="filters">
      <label>
        <input type="checkbox" onChange={onToggleFilter} />
        Filter by Tech Category
      </label>
    </div>
  );
};

export default Filters;
