// SearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search projects"
        />
        {searchTerm && (
          <button 
            className="clear-search" 
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
