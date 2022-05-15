import "./AlbumList.scss";
import React from "react";
import AlbumListItem from "./AlbumListItem";

const AlbumList = ({ albums, onSelectAlbum }) => {
  const scrollX = (e) => {
    console.log(e);
    e.preventDefault();
    e.target.scrollBy({
      left: e.deltaY < 0 ? -30 : 30,
    });
  };

  scrollX.active = false;
  return (
    <div className="album-list" onWheel={scrollX}>
      {albums.map((album) => (
        <AlbumListItem key={album.id} album={album} onClick={onSelectAlbum} />
      ))}
    </div>
  );
};

export default AlbumList;
