import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {
  //
  const [sorteado, setSorteado] = useState({});
  const [botaoApertado, setBotaoApertado] = useState(false);
  //
  useEffect(() => {
    async function fetchSorteado() {
      //setLoading(false);
      const response = await axios.get('https://ironbeer-api.fly.dev/random');

      setSorteado(response.data);
      console.log(sorteado, '<--- sorteado');
      //
      //console.log(response.data, 'response.data');
      //setSorteado(response.data);
      //
      //setLoading(true);
    }
    fetchSorteado(); //chama a função
  }, [botaoApertado]);
  //
  function handleClick() {
    setBotaoApertado(!botaoApertado);
  }
  //
  return (
    <div>
      <div>-- sorteado -- </div>
      <div>{sorteado.name}</div>
      <div>{sorteado.brewers_tips}</div>
      <div>{sorteado.createdAt}</div>
      <div>{sorteado.description}</div>
      <img className="imagem" src={sorteado.image} alt="teste" />
      <button onClick={handleClick}>sortear</button>
    </div>
  );
}

export default RandomBeer;
