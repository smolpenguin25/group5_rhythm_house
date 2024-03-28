import React, { useState } from "react";

const SearchNameMagazine = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://660427482393662c31d0c441.mockapi.io/magazine?name=${searchTerm}`
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
export default SearchNameMagazine;
