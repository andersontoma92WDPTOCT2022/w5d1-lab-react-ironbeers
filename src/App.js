import './App.css';
import Navbar from './contents/Navbar';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import HomePage from './pages/HomePage';
//
import { Routes, Route } from 'react-router-dom'; // <== IMPORT
//
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Beers" element={<Beers />} />
        <Route path="/RandomBeer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
