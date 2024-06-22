import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Type to Search"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
    </>
  );
}

export default SearchBar;
