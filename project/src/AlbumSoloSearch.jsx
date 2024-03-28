import React, { useState } from "react";

const SearchName = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://65d55b883f1ab8c63436c62f.mockapi.io/solo?name=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to search data");
      }
      const searchData = await response.json();
      onSearch(searchData);
      console.log("Search data:", searchData);
    } catch (error) {
      console.error("Error searching data:", error);
    }
    setSearchTerm("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <div className="search-name">
      <input
      className="search-bar"
        placeholder="Search..."
        onKeyDown={handleKeyDown}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchName;
