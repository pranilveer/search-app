import React from "react";

const SearchBox = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
