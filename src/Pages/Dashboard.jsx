import React from "react";
import { useImmer } from "use-immer";
import { FavoriteArtistList, Profile, SpotifyPlayer, TrackList } from "../Components";
import "./Dashboard.scss";
import { useSelector } from "react-redux";
import { SearchResult } from "../Components/SearchResult";

export const Dashboard = () => {
  const userState = useSelector((s) => s.user);
  const searchResult = useSelector((s) => s.app);

  return (
    <div className="dashboard-page">
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <Profile />
        {!!searchResult.searchKey ? (
          <SearchResult />
        ) : (
          <>
            <FavoriteArtistList />
            <TrackList trackList={userState.favTrack.items} />
            <SpotifyPlayer />
          </>
        )}
      </div>
    </div>
  );
};
