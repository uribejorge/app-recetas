import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Vegetarianas from '../pages/recetas/Vegetarianas'
import NoVegetarianas from '../pages/recetas/NoVegetarianas'
export let enrutadorApp = [
    {
        element: <Login />,
        path: "/login",
    },
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: 'vegetarianas',
                element: <Vegetarianas />
            },
            {
                path: 'no-vegetarianas',
                element: <NoVegetarianas />
            }
        ]
    },
]