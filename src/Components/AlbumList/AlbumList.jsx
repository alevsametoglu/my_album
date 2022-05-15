import "./AlbumList.scss";
import React, { useEffect } from "react";
import AlbumListItem from "./AlbumListItem";
import { util } from "../../app/util";

const AlbumList = ({ albums, onSelectAlbum }) => {
  useEffect(() => {
    util.addScrollXEventListener();
    return () => {
      util.removeScrollXEventListener();
    };
  }, []);

  return (
    <div className="album-list" id="scroll-x">
      {albums.map((album) => (
        <AlbumListItem key={album.id} album={album} onClick={onSelectAlbum} />
      ))}
    </div>
  );
};

export default AlbumList;
