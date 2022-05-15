import "./App.scss";

import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";

import { Callback } from "./Pages/Callback";
import { Dashboard } from "./Pages/Dashboard";
import { LoginPage } from "./Pages/LoginPage";
import { ArtistPage } from "./Pages/ArtistPage/ArtistPage";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./redux/authSlice";
import { userActions } from "./redux/userSlice";

function App() {
  const authState = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState.token) {
      dispatch(authActions.loadProfile());
      dispatch(userActions.loadFavoriteArtists());
      dispatch(userActions.loadFavoriteTracks());
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={authState.isAuth ? <Dashboard /> : <Navigate replace to="/login" />} />
          <Route path="/artist/:id" element={authState.isAuth ? <ArtistPage /> : <Navigate replace to="/login" />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
