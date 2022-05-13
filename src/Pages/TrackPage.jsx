import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SpotifyWebPlayer from "react-spotify-web-playback";
import api from "../Api";
import { Track } from "../Components";
import "./TrackPage.scss";

export const TrackPage = () => {
  const params = useParams();
  const authState = useSelector((store) => store.auth);
  const [selectedTrack, setSelectedTrack] = useState(
    "spotify:artist:6HQYnRM4OzToCYPpVBInuU"
  );
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    api.getAlbumTracks(params.id).then((response) => {
      setTracks(response);
    });
  }, []);

  return (
    <div className="track-page">
      <h2>Song List</h2>
      <SpotifyWebPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#515166",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
        token={authState.token}
        uris={[selectedTrack]}
      />
      {tracks.map((item) => (
        <div>
          <Track
            key={item.id}
            name={item.name}
            onClick={() => setSelectedTrack(item.uri)}
          />
        </div>
      ))}
    </div>
  );
};
