import './App.css';
import Navbar from './contents/Navbar';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import HomePage from './pages/HomePage';
import BeerDetails from './pages/BeerDetails';
//
import { Routes, Route } from 'react-router-dom'; // <== IMPORT
import { useState } from 'react';
//
function App() {
  //
  //const [beers, setBeers] = useState([]);
  //
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Beers" element={<Beers />} />
        <Route path="/RandomBeer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
        <Route path="/Beers/:beerID" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
/* beers={beers} setBeers={setBeers} */
