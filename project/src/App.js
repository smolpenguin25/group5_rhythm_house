import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import React, { useEffect } from 'react';
<<<<<<< HEAD
import Login from './Login';
=======
import ContactUs from  './ContactUs';
import AboutUsUs from  './AboutUs';
>>>>>>> e633bb33b00f9345f89d6083eb3f1235e4a09ea5

function App() {
  useEffect(() => {
    document.title = 'Rhythm House';
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='solo' />
          <Route path='band' />
          <Route path='movie' />
          <Route path='magazine' />
          <Route path='events' />
          <Route path='membership' />
<<<<<<< HEAD
          <Route path='about' />
          <Route path='contact' />
          <Route path='login' element={<Login/>}/>
=======
          <Route path='about' element={<AboutUs/>} />
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='login' />
>>>>>>> e633bb33b00f9345f89d6083eb3f1235e4a09ea5
          <Route path='signup' />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
