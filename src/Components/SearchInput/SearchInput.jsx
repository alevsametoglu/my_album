import React from "react";
import "./SearchInput.scss";

const SearchInput = (props) => {
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Search an artist..."
        onKeyDown={(e) => e.key === "Enter" && props.onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
