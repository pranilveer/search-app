import React from "react";

const Results = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="results">
      {results.map((item) => (
        <div key={item.id} className="result-item">
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          <p>Date: {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
