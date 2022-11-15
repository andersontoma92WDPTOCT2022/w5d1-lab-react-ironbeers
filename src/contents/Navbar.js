import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar fs-3 bg-dark mb-4 d-flex justify-content-around">
      <Link to="/"> Home </Link>
      <Link to="/Beers"> Beers </Link>
      <Link to="/RandomBeer"> Random Beer </Link>
      <Link to="/NewBeer"> New Beer </Link>
    </div>
  );
}

export default Navbar;
