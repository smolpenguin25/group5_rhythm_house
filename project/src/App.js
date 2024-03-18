import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import AlbumSolo from "./AlbumSolo";
import React, { useEffect } from "react";
import Band from "./AlbumBand";

function App() {
  useEffect(() => {
    document.title = "Rhythm House";
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="solo" element={<AlbumSolo />} />
          <Route path="band" element={<Band />} />
          <Route path="movie" />
          <Route path="magazine" />
          <Route path="events" />
          <Route path="membership" />
          <Route path="about" />
          <Route path="contact" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
