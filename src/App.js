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
import toast, { Toaster } from 'react-hot-toast';
//
function App() {
  //
  const [beers, setBeers] = useState([]);
  //
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Beers"
          element={<Beers beers={beers} setBeers={setBeers} />}
        />
        <Route path="/RandomBeer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
        <Route path="/Beers/:beerID" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
/* */
