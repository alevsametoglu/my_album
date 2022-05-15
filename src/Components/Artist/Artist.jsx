import "./Artist.scss";
import React from "react";
import { Link } from "react-router-dom";

const Artist = ({ image, name, id }) => {
  return (
    <Link to={`artist/${id}`} className="artist">
      <img className="profile-image" src={image} alt={name} />
      <span className="name">{name}</span>
    </Link>
  );
};

export default Artist;
