import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Filters from "./components/Filters";
import Results from "./components/Results";
import "./App.css";

const data = [
  { id: 1, title: "Blog Post 1", category: "Tech", date: "2024-01-01" },
  { id: 2, title: "Blog Post 2", category: "Health", date: "2024-02-15" },
  { id: 3, title: "Blog Post 3", category: "Tech", date: "2024-03-10" },
  { id: 4, title: "Blog Post 4", category: "Lifestyle", date: "2024-04-20" },
  { id: 5, title: "Blog Post 5", category: "Travel", date: "2024-05-05" },
  { id: 6, title: "Blog Post 6", category: "Tech", date: "2024-06-10" },
  { id: 7, title: "Blog Post 7", category: "Health", date: "2024-07-15" },
  { id: 8, title: "Blog Post 8", category: "Lifestyle", date: "2024-08-01" },
  { id: 9, title: "Blog Post 9", category: "Finance", date: "2024-09-20" },
  { id: 10, title: "Blog Post 10", category: "Travel", date: "2024-10-25" },
  { id: 11, title: "Blog Post 11", category: "Tech", date: "2024-11-05" },
  { id: 12, title: "Blog Post 12", category: "Lifestyle", date: "2024-12-15" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState(false);

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());
  const handleFilterToggle = () => setFilterCategory(!filterCategory);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery);
    const matchesCategory = filterCategory ? item.category === "Tech" : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container">
      <h1>Search Page</h1>
      <SearchBox onSearch={handleSearch} />
      <Filters onToggleFilter={handleFilterToggle} />
      <Results results={filteredData} />
    </div>
  );
}

export default App;