import React from "react";
import "./Track.scss";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../redux/appSlice";
const Track = ({ image, uri, duration, name, artistName, albumName }) => {
  const appState = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const playTrack = () => {
    dispatch(appActions.selectTrack(uri));
  };
  return (
    <div className="track" onClick={playTrack}>
      <img src={image} alt="" />
      <div className="title">
        <span style={{ fontWeight: "bold", color: appState.selectedTrackUri === uri ? "green" : undefined }}>{name}</span>
        <span style={{ fontSize: 14 }}>{artistName}</span>
      </div>
      <div style={{ flexGrow: 1 }} />

      <div style={{ width: 400 }}>{albumName}</div>
      <div>{duration}</div>
    </div>
  );
};
export default Track;
