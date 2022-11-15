import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    toast.success('Beer criada com sucesso! :D');
  }
  //
  return (
    <div>
      <div>new beer</div>

      <Form className="newBeerForm">
        <Form.Group className="mb-1">
          <Form.Label className="p-1">name </Form.Label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="p-1">tagline</Form.Label>
          <input
            type="text"
            name="tagline"
            onChange={handleChange}
            value={form.tagline}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="p-1">description </Form.Label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="p-1">first_brewed </Form.Label>
          <input
            type="text"
            name="first_brewed"
            onChange={handleChange}
            value={form.first_brewed}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="p-1">brewers_tips </Form.Label>
          <input
            type="text"
            name="brewers_tips"
            onChange={handleChange}
            value={form.brewers_tips}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="p-1">attenuation_level </Form.Label>
          <input
            type="number"
            name="attenuation_level"
            onChange={handleChange}
            value={form.attenuation_level}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="p-1">contributed_by </Form.Label>
          <input
            type="text"
            name="contributed_by"
            onChange={handleChange}
            value={form.contributed_by}
          />
        </Form.Group>
        <button onClick={handleSubmit}>salvar cerveja</button>
        {/* botão atualiza */}
        {/* <button onClick={handleReload}>Recarregar api!!</button> */}
      </Form>
    </div>
  );
}

export default NewBeer;
