import React from "react";

const SearchBar = () => {
  return (
    <div className="search-scontainer">
      <form action="search" id="form">
        <input
          type="search"
          id="query"
          placeholder="Search favorite movie..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
