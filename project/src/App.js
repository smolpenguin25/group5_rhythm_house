import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import AlbumSolo from "./AlbumSolo";
import React, { useEffect } from "react";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import EventMainPage from "./EventMainPage";
import JoinUs from "./JoinUs";
import SoloDetail from "./AlbumSoloDetail";
import AlbumBand from "./AlbumBand";
import BandDetail from "./AlbumBandDetail";
import AlbumMovie from "./AlbumMovie";
import MovieDetail from "./MovieDetail";
import AlbumMagazine from "./AlbumMagazine";
import MagazineDetail from "./AlbumMagazineDetail";
import AlbumRock from "./AlbumRock";
import RockDetail from "./AlbumRockDetail";
import { More } from "./More";
import { EventSchedule } from "./EventSchedule";

function App() {
  useEffect(() => {
    document.title = "Rhythm House";
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />

          <Route path="band" element={<AlbumBand />} />
          <Route path="band/:id" element={<BandDetail />} />
          <Route path="movie" element={<AlbumMovie />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="magazine" element={<AlbumMagazine />} />
          <Route path="magazine/:id" element={<MagazineDetail />} />
          <Route path="rock" element={<AlbumRock />} />
          <Route path="rock/:id" element={<RockDetail />} />
          <Route path="membership" />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" />
          <Route path="*" element={<ErrorPage />} />
          <Route path="solo" element={<AlbumSolo />} />
          <Route path="events" element={<EventMainPage />} />
          <Route path="about" />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="solo/:id" element={<SoloDetail />} />
          <Route path="more" element={<More/>} />
          <Route path="event-schedule" element={<EventSchedule/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
