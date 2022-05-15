import React, { useEffect, useState } from "react";
import { Artist } from "..";
import api from "../../app/api";
import "./UserArtistList.scss";

const UserArtistList = () => {
  const [myArtists, setMyArtists] = useState([]);
  useEffect(() => {
    api.user.getFollowedArtist().then((response) => setMyArtists(response));
  }, []);

  return (
    <div>
      {myArtists.map((artist) => (
        <Artist key={artist.id} name={artist.name} image={artist.images?.[0]?.url} navigate={`/artist/${artist.id}`} />
      ))}
    </div>
  );
};
export default UserArtistList;
