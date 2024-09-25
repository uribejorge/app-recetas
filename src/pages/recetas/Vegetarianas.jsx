import { Link } from "react-router-dom"
import { recetasVegetarianas } from "../../data/recetas"
import './vegetarianas.css'

const Vegetarianas = () => {
  return (
    <div className="cards">
      {
        recetasVegetarianas.map((receta) => (
          <section key={receta.id}>
            {/* <p>Id: {receta.id}</p> */}
            <p>Nombre: {receta.nombre}</p>
            <p>Descripcion: {receta.descripcion}</p>
            <p>Dificultad: {receta.dificultad}</p>
            <p>Tiempo: {receta.tiempo}</p>
            <div>
              <button className="eliminar">Eliminar</button>
              <Link className="editar">Editar</Link>
              <Link className="detalle">Detalles</Link>
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Vegetarianas