import React from "react";
import "./HomePage.scss";
import gitars from "./guitars.jpeg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Choose your favorite artiste!</h1>
      <p>Create your albums!</p>

      <div>
        <img src={gitars} alt="" />
      </div>
    </div>
  );
};
