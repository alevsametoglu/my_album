import React from "react";
import { SearchInput } from "..";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/authSlice";
import { userActions } from "../../redux/userSlice";
import "./Profile.scss";
import { appSlice } from "../../redux/appSlice";

const Profile = () => {
  const authState = useSelector((s) => s.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
    dispatch(userActions.clearUserInfo());
    navigate("/");
  };

  return (
    <div className="profile">
      <div className="profile-info">
        <img className="profile-image" src={authState.image} alt={authState.displayName} />
        <div className="profile-name">
          <h1 style={{ color: "white" }}>{authState.displayName}</h1>
          {authState.isAuth && (
            <span className="logout" onClick={logout}>
              logout
            </span>
          )}
        </div>
      </div>
      <div className="search">
        <SearchInput />
      </div>
    </div>
  );
};

export default Profile;
