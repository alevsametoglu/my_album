import React from "react";
import { useImmer } from "use-immer";
import { Artist, SearchInput, UserArtistList } from "../Components";
import api from "../Api.js";
import "./Dashboard.scss";

export const Dashboard = () => {
  const [pageState, setPageState] = useImmer({
    loading: false,
    errorMessage: "",
    artists: [],
    searchKey: "",
  });
  const handleSearch = (value) => {
    console.log(value);
    setPageState((draft) => {
      draft.loading = true;
      draft.errorMessage = "";
      draft.searchKey = value;
    });
    api
      .searchArtists(value)
      .then((artists) =>
        setPageState((draft) => {
          draft.artists = artists;
          draft.loading = false;
        })
      )
      .catch((error) =>
        setPageState((draft) => {
          draft.errorMessage = error.message;
          draft.loading = false;
        })
      );
  };
  const clearSearchResult = () => {
    setPageState((draft) => {
      draft.searchKey = "";
    });
  };
  return (
    <div className="dashboard-page">
      {pageState.searchKey ? (
        <div className="results">
          <div>Search Results "{pageState.searchKey}" </div>
          <span onClick={clearSearchResult}>clear</span>
        </div>
      ) : (
        <div className="results"> Search Your Artists!</div>
      )}

      <section className="search">
        <SearchInput onSearch={handleSearch} />
      </section>

      <section className="artist-list">
        {!pageState.searchKey && <UserArtistList />}

        {pageState.errorMessage && pageState.errorMessage}
        {pageState.loading
          ? "loading..."
          : pageState.artists.map((artist) => (
              <Artist
                key={artist.id}
                name={artist.name}
                image={artist.image}
                id={artist.id}
                navigate={`/artist/${artist.id}`}
              />
            ))}
      </section>
    </div>
  );
};
