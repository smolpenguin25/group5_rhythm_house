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
import EventMainPage from './EventMainPage';
import JoinUs from "./JoinUs";
import Band from "./AlbumBand";
import ForgotPassword from "./ForgotPassword";
import Membership from "./Membership";
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

          <Route path="band" element={<Band />} />
          <Route path="movie" />
          <Route path="magazine" />
          <Route path="membership"  element={<Membership/>}/>
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="solo" element={<AlbumSolo />} />
          <Route path="events" element={<EventMainPage />} />
          <Route path="about" />
          <Route path="join-us" element={<JoinUs />} />
          <Route path='event-schedule' element={<EventSchedule/>}/>



        </Route>
      </Routes>
    </div>
  );
}

export default App;
