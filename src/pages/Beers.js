import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Beers() {
  //
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(beers, 'beers');
  //
  useEffect(() => {
    async function fetchBeers() {
      //setLoading(false);
      const response = await axios.get('https://ironbeer-api.fly.dev/');
      //
      setBeers(response.data);
      console.log(response.data, 'response.data no fetch');
      //
      setLoading(true);

      console.log(beers, 'beers // ', loading, 'loading?');
    }
    fetchBeers(); //chama a função
  }, []);
  console.log('entrando no return');
  return (
    <div>
      {loading &&
        beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img className="imagem" src={beer.image} alt="teste" />
              <Link to={`/Beers/${beer._id}`}>Ver mais detalhes</Link>
              <div>{beer.name}</div>
              <div>{beer.contributed_by}</div>
              <div>{beer.tagline}</div>
            </div>
          );
        })}
      <div>xxxxxY</div>
    </div>
  );
}

export default Beers;
