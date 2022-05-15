import React from "react";
import logo from "./logoSpotify.png";
import "./LoginPage.scss";

const client_id = "558c8cdf1eda4ca88e35b68a25c576e2";
var redirect_uri = "https://thriving-cheesecake-af8741.netlify.app/callback";
var scope =
  "ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read";

var url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(client_id);
url += "&scope=" + encodeURIComponent(scope);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

export const LoginPage = () => {
  return (
    <div className="login-page">
      <a className="page-logo" href={url}>
        <p>Login with</p>
        <img src={logo} alt="" />
      </a>
    </div>
  );
};
