import "./ArtistPage.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AlbumList, FavoriteTrackList, SectionHeader, SpotifyPlayer, TrackList } from "../../Components";
import api from "../../app/api";
import ArtistProfile from "./component/ArtistProfile";

export const ArtistPage = () => {
  const params = useParams();
  const [artist, setArtist] = useState();
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api.artist.getById(params.id).then((response) => setArtist(response));
    api.artist.getAlbumList(params.id).then(setAlbums);
    api.artist.getTopTracks(params.id).then(setTracks);
  }, []);
  const loadAlbumTracks = (id) => {
    const album = albums.find((x) => x.id === id);
    api.album
      .getTracks(id)
      .then((tracks) =>
        tracks.map((track) => {
          track.albumImage = album.image;
          track.albumName = album.name;
          return track;
        })
      )
      .then(setTracks);
  };
  return (
    <div className="artist-page">
      <ArtistProfile artist={artist} />
      <SectionHeader title="albums" />
      <AlbumList onSelectAlbum={loadAlbumTracks} albums={albums} />
      <TrackList trackList={tracks} />
      <SpotifyPlayer />
    </div>
  );
};
