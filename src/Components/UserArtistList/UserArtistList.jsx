import React, { useEffect, useState } from "react";
import { Artist } from "..";
import api from "../../Api";
import "./UserArtistList.scss";

const UserArtistList = () => {
  const [myArtists, setMyArtists] = useState([]);
  useEffect(() => {
    api.getUserArtist().then((response) => setMyArtists(response));
  }, []);
  console.log(myArtists);

  return (
    <div>
      {myArtists.map((artist) => (
        <Artist
          key={artist.id}
          name={artist.name}
          image={artist.images?.[0]?.url}
          navigate={`/artist/${artist.id}`}
        />
      ))}
    </div>
  );
};
export default UserArtistList;
