import React from "react";
import "./Track.scss";
import listen from "./listen.jpeg";
import { useSelector } from "react-redux";

const Track = ({ name, onClick }) => {
  const authState = useSelector((store) => store.auth);
  console.log(authState.token);

  return (
    <div onClick={onClick} className="track">
      <img src={listen} alt="" />
      <div className="title">
        <p>{name}</p>
      </div>
    </div>
  );
};
export default Track;
