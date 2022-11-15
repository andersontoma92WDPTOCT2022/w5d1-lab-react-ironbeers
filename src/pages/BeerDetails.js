import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//
function BeerDetails() {
  const { beerID } = useParams();
  const [beer, setBeer] = useState({});
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [reload, setReload] = useState(false);
  //
  useEffect(() => {
    async function fetchBeer() {
      const response = await axios.get(
        `https://ironbeer-api.fly.dev/${beerID}`
      );
      setBeer(response.data);
      //populara o form inicial com os dados da atual beer
      setForm(response.data);
    }
    fetchBeer();
  }, [reload]);
  //
  async function handleDelete() {
    await axios.delete(`https://ironbeer-api.fly.dev/delete/${beerID}`);
    navigate('/Beers');
  }
  // --------------- editar  -----------------
  // --------------- editar  -----------------

  const [form, setForm] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });
  //
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value, 'e.target.value');
  }
  //editar
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form, 'form');

    try {
      //clonar o state para um obj JS
      const clone = { ...form };
      //deletar a chave _id do obj
      delete clone._id;
      await axios.put(`https://ironbeer-api.fly.dev/edit/${beer._id}`, clone);
      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }

    //handleReload();
    //toast.success('Aluno criado com sucesso! :D');
  }
  //
  //  --------------- fim editar  -----------------
  return (
    <div>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Alterar/Editar Beer
      </button>
      {!showForm && (
        <section>
          <div>{beer.name}</div>
          <div>{beer.brewers_tips}</div>
          <div>{beer.createdAt}</div>
          <div>{beer.description}</div>
          <img className="imagem" src={beer.image} alt="teste" />
          <button onClick={handleDelete}>Deletar cerveja</button>
        </section>
      )}

      {/* ---------  editar  -------- */}
      <section>
        {showForm && (
          <form>
            <div>
              <label>name </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div>
              <label>tagline</label>
              <input
                type="text"
                name="tagline"
                onChange={handleChange}
                value={form.tagline}
              />
            </div>
            <div>
              <label>description </label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                value={form.description}
              />
            </div>
            <div>
              <label>first_brewed </label>
              <input
                type="text"
                name="first_brewed"
                onChange={handleChange}
                value={form.first_brewed}
              />
            </div>
            <div>
              <label>brewers_tips </label>
              <input
                type="text"
                name="brewers_tips"
                onChange={handleChange}
                value={form.brewers_tips}
              />
            </div>
            <div>
              <label>attenuation_level </label>
              <input
                type="number"
                name="attenuation_level"
                onChange={handleChange}
                value={form.attenuation_level}
              />
            </div>
            <div>
              <label>contributed_by </label>
              <input
                type="text"
                name="contributed_by"
                onChange={handleChange}
                value={form.contributed_by}
              />
            </div>
            <button onClick={handleSubmit}>salvar cerveja</button>
            {/* botão atualiza */}
            {/* <button onClick={handleReload}>Recarregar api!!</button> */}
          </form>
        )}
      </section>
    </div>
  );
}

export default BeerDetails;
