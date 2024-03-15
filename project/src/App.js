<<<<<<< HEAD
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import AlbumSolo from "./AlbumSolo";
=======
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import React, { useEffect } from 'react';
import Login from './Login';
import ContactUs from './ContactUs';
>>>>>>> fb28ffb4586beceb6eda8c827fe1c9800e193cd6

function App() {
  useEffect(() => {
    document.title = 'Rhythm House';
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
<<<<<<< HEAD
          <Route path="solo" element={<AlbumSolo />} />
          <Route path="band" />
          <Route path="movie" />
          <Route path="magazine" />
          <Route path="events" />
          <Route path="membership" />
          <Route path="about" />
          <Route path="contact" />
        </Route>
      </Routes>
=======
          <Route path='solo' />
          <Route path='band' />
          <Route path='movie' />
          <Route path='magazine' />
          <Route path='events' />
          <Route path='membership' />
          <Route path='about' />
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' />
        </Route>
      </Routes>

>>>>>>> fb28ffb4586beceb6eda8c827fe1c9800e193cd6
    </div>
  );
}

export default App;
