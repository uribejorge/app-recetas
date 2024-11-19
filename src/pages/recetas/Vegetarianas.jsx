import { Link } from "react-router-dom";
import "./Vegetarianas.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
let urlRecetas = "http://localhost:3000/vegetarianas";

const Vegetarianas = () => {
  const [recetasVegetarianas, setRecetasVegetarianas] = useState([]);

  function consultarRecetas() {
    fetch(urlRecetas)
      .then((response) => response.json())
      .then((json) => setRecetasVegetarianas(json))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    consultarRecetas();
  }, []);

  async function eliminarReceta(id) {
    await axios.delete(urlRecetas + "/" + id);
    consultarRecetas();
  }

  // const funcionFlecha = async () => {

  // }

  function confirmarEliminarReceta(id, nombre) {
    Swal.fire({
      title: "Está seguro?",
      text: "Se va a eliminar la receta " + nombre,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarReceta(id);
        Swal.fire({
          title: "Elminado!",
          text: "La receta se eliminó de forma correcta.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="cards">
      {recetasVegetarianas.map((receta) => (
        <section key={receta.id}>
          {/* <p>Id: {receta.id}</p> */}
          <p>Nombre: {receta.nombre}</p>
          <p>Descripcion: {receta.descripcion}</p>
          <p>Dificultad: {receta.dificultad}</p>
          <p>Tiempo: {receta.tiempo}</p>
          <div>
            <button
              onClick={() => confirmarEliminarReceta(receta.id, receta.nombre)}
              className="eliminar"
            >
              Eliminar
            </button>
            <Link to={"/editar-receta-vegetariana/"+receta.id} className="editar">
              Editar
            </Link>
            <Link className="detalle">Detalles</Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Vegetarianas;
