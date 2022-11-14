import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Beers">Beers</Link>
      <Link to="/RandomBeer">Random Beer</Link>
      <Link to="/NewBeer">New Beer</Link>
    </div>
  );
}

export default Navbar;
