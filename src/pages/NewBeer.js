import axios from 'axios';
import { useState } from 'react';

function NewBeer() {
  //
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
  //
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form, 'form');

    await axios.post('https://ironbeer-api.fly.dev/new', form);
    setForm({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    });
    //handleReload();
    //toast.success('Aluno criado com sucesso! :D');
  }
  //
  return (
    <div>
      <div>new beer</div>

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
    </div>
  );
}

export default NewBeer;
