import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import AlbumSolo from './AlbumSolo';
import EventMainPage from './EventMainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='solo' element={<AlbumSolo/>}/>
          <Route path='events' element={<EventMainPage/>}/>
          <Route path='band'/>
          <Route path='movie'/>
          <Route path='magazine'/>
        
          <Route path='membership'/>
          <Route path='about'/>
          <Route path='contact'/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
