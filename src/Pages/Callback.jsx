import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import api from "../app/api";
import { useNavigate } from "react-router-dom";

import { authActions } from "../redux/authSlice";
import { userActions } from "../redux/userSlice";
import "./Callback.scss";
import { LetterAnimation } from "../Components";

export const Callback = () => {
  const dispatch = useDispatch();
  const authState = useSelector((store) => store.auth);
  const params = useLocation();
  const navigate = useNavigate();
  const urlParams = new Map();
  const paramArray = params.hash.split("&");

  paramArray?.forEach((param) => urlParams.set(param.split("=")[0], param.split("=")[1]));

  useEffect(() => {
    api.setDefaultToken(urlParams.get("#access_token"));
    dispatch(authActions.setToken({ token: urlParams.get("#access_token") }));
    dispatch(authActions.loadProfile());
    dispatch(userActions.loadFavoriteArtists());
    dispatch(userActions.loadFavoriteTracks());

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <div className="callback">
      <h1>Welcome {authState.displayName}!</h1>
      <LetterAnimation />
    </div>
  );
};
