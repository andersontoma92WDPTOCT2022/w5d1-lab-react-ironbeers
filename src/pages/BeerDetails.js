import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//
function BeerDetails() {
  const { beerID } = useParams();
  const [beer, setBeer] = useState({});
  const navigate = useNavigate();
  //
  useEffect(() => {
    async function fetchBeer() {
      const response = await axios.get(
        `https://ironbeer-api.fly.dev/${beerID}`
      );
      setBeer(response.data);
    }
    fetchBeer();
  }, []);
  //
  async function handleDelete() {
    await axios.delete(`https://ironbeer-api.fly.dev/delete/${beerID}`);
    navigate('/Beers');
  }
  //
  return (
    <div>
      <div>{beer.name}</div>
      <div>{beer.brewers_tips}</div>
      <div>{beer.createdAt}</div>
      <div>{beer.description}</div>
      <img className="imagem" src={beer.image} alt="teste" />
      <button onClick={handleDelete}>Deletar cerveja</button>
    </div>
  );
}

export default BeerDetails;
