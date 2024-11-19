import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Vegetarianas from "../pages/recetas/Vegetarianas";
import NoVegetarianas from "../pages/recetas/NoVegetarianas";
import Register from "../pages/auth/Register";
import CrearRecetaVegetariana from "../pages/recetas/vegetarianas/CrearRecetaVegetariana";
import EditarRecetaVegetariana from "../pages/recetas/vegetarianas/EditarRecetaVegetariana";
export let enrutadorApp = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "vegetarianas",
        element: <Vegetarianas />,
      },
      {
        path: "no-vegetarianas",
        element: <NoVegetarianas />,
      },
      {
        path: "crear-receta-vegetariana",
        element: <CrearRecetaVegetariana />,
      },
      {
        path: "editar-receta-vegetariana/:id",
        element: <EditarRecetaVegetariana />,
      },
    ],
  },
];
