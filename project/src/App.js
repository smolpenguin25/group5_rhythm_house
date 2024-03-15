import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import AlbumSolo from "./AlbumSolo";
import React, { useEffect } from 'react';
import ContactUs from "./ContactUs"
import Login from "./Login";
import EventMainPage from './EventMainPage';
import AboutUs from './AboutUs';
function App() {
  useEffect(() => {
    document.title = 'Rhythm House';
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="band" />
          <Route path="movie" />
          <Route path="magazine" />
          <Route path="membership" />
          <Route path="about" element={<AboutUs/>} />
          <Route path="contact" element={<ContactUs/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" />
          <Route path='solo' element={<AlbumSolo/>}/>
          <Route path='events' element={<EventMainPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
