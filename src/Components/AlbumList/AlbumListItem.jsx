import React from "react";
import "./AlbumListItem.scss";

const AlbumListItem = ({ album, onClick }) => {
  return (
    <div className="album" onClick={() => onClick(album.id)}>
      <img className="album-image" src={album.image} alt={album.name} />
      <span className="name">{album.name}</span>
      <span>{album.date}</span>
    </div>
  );
};
export default AlbumListItem;
