import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Artist } from ".";
import { appActions } from "../redux/appSlice";

export const SearchResult = () => {
  const { searchResult, searchKey } = useSelector((s) => s.app);

  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ color: "white" }}>
        <h3>
          Search Results "{searchKey}"
          <span
            style={{ fontSize: "14px", fontStyle: "italic", textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              dispatch(appActions.clearSearchKey());
            }}
          >
            clear
          </span>
        </h3>
      </div>
      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr 1fr 1fr " }}>
        {searchResult.map((item) => (
          <Artist id={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};
