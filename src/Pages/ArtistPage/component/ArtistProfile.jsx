import React from "react";
import "./ArtistProfile.scss";

const ArtistProfile = ({ artist }) => {
  return (
    <div className="artist-profile">
      <img src={artist?.image} alt={artist?.name} />
      <div className="artist-infos">
        <div className="name">{artist?.name}</div>
        <span className="follower">{artist?.followers}</span>
      </div>
    </div>
  );
};

export default ArtistProfile;
