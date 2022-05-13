import React from "react";
import "./Artist.scss";
import { Link } from "react-router-dom";

const Artist = ({ name, image, id, navigate }) => {
  return (
    <Link to={navigate} className="album">
      <div className="image">
        <img srcSet={image} alt="" />
      </div>
      <div>
        <div className="infos">
          <div className="title">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Artist;
