import React from "react";
import { useDispatch } from "react-redux";
import api from "../../app/api";
import { appActions } from "../../redux/appSlice";
import "./SearchInput.scss";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(appActions.setSearchKey(value));
    api.searchArtists(value).then((result) => dispatch(appActions.setSearchResult(result)));
  };

  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Search an artist..."
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
