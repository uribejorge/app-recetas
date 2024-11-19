import { createBrowserRouter, RouterProvider } from "react-router-dom";import { enrutadorApp } from "../routes/enrutador";
let router = createBrowserRouter(enrutadorApp);
const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
