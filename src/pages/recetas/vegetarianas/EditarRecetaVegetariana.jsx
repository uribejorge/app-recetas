import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
let urlRecetas = "http://localhost:3000/vegetarianas/";

const EditarRecetaVegetariana = () => {
  const [stateNombre, setStateNombre] = useState("");
  const [stateDescripcion, setStateDescripcion] = useState("");
  const [stateDificultad, setStateDificultad] = useState("");
  const [stateTiempo, setStateTiempo] = useState("");
  let { id } = useParams();
  console.log(id);
  async function consultarRecetaId() {
    console.log(await axios.get(urlRecetas + id));
    let response = await axios.get(urlRecetas + id);
    setStateNombre(response.data.nombre)
  }
  consultarRecetaId();
  function editarReceta() {}
  function confirmarEditarReceta() {}
  return (
    <form>
      <input
        onChange={(e) => setStateNombre(e.target.value)}
        placeholder="Nombre"
        type="text"
        value={stateNombre}
      />
      <input
        onChange={(e) => setStateDescripcion(e.target.value)}
        placeholder="Descripcion"
        type="text"
      />
      <input
        onChange={(e) => setStateDificultad(e.target.value)}
        placeholder="Dificultad"
        type="text"
      />
      <input
        onChange={(e) => setStateTiempo(e.target.value)}
        placeholder="Tiempo"
        type="text"
      />
      <button type="button">Editar</button>
    </form>
  );
};

export default EditarRecetaVegetariana;
