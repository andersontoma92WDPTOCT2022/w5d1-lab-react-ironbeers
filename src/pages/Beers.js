import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Beers({ beers, setBeers }) {
  //

  const [atualiza, setAtualiza] = useState(false);
  //console.log(beers, 'beers');
  //
  useEffect(() => {
    async function fetchBeers() {
      //setLoading(false);
      const response = await axios.get('https://ironbeer-api.fly.dev/');
      //
      setBeers(response.data);
      //console.log(response.data, 'response.data no fetch');
      //
      //console.log(beers, 'beers // ', loading, 'loading?');
    }
    fetchBeers(); //chama a função
  }, [atualiza]);
  //

  //console.log('entrando no return');
  return (
    <div>
      <button
        onClick={() => {
          setAtualiza(!atualiza);
        }}
      >
        Reload Beers
      </button>
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="cardBeers text-center">
            <img className="imagem" src={beer.image} alt="teste" />
            <article>
              <Link to={`/Beers/${beer._id}`}>Ver mais detalhes</Link>
              <div>{beer.name}</div>
              <div>{beer.contributed_by}</div>
              <div>{beer.tagline}</div>
            </article>
          </div>
        );
      })}
      <div>xxxxxY</div>
    </div>
  );
}

export default Beers;
