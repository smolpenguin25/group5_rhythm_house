import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='solo'/>
          <Route path='band'/>
          <Route path='movie'/>
          <Route path='magazine'/>
          <Route path='events'/>
          <Route path='membership'/>
          <Route path='about'/>
          <Route path='contact' element={<ContactUs />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
