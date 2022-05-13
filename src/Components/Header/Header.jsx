import React from "react";
import logo from "../Header/logo.jpeg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/authSlice";

const client_id = "558c8cdf1eda4ca88e35b68a25c576e2";
var redirect_uri = "http://localhost:3000/callback";
var scope =
  "ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read";

var url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(client_id);
url += "&scope=" + encodeURIComponent(scope);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

const Header = () => {
  const navigate = useNavigate();
  const authState = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());

    navigate("/");
  };

  return (
    <div className="header">
      <Link to="/" className="logo-header">
        <img src={logo} alt="logo" />
        <p>My Album</p>
      </Link>
      {authState.isAuth ? (
        <div className="profile">
          {authState.image ? (
            <img src={authState.image} alt="profile" />
          ) : (
            <i className="fa fa-user-circle"></i>
          )}
          <div className="user">
            <span>{authState.displayName}</span>
            <span className="logout" onClick={logout}>
              logout
            </span>
          </div>
        </div>
      ) : (
        <a href={url} className="sing-in">
          <i className="fa fa-user-circle"></i>
          <span>Sing in</span>
        </a>
      )}
    </div>
  );
};
export default Header;
