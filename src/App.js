import "./App.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage";
import { Callback } from "./Pages/Callback";
import { Dashboard } from "./Pages/Dashboard";
import { AlbumsPage } from "./Pages/AlbumsPage";
import { TrackPage } from "./Pages/TrackPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/artist/:id" element={<AlbumsPage />} />
          <Route path="/artist/:id/track" element={<TrackPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
