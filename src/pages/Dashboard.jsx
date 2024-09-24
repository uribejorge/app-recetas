import Header from "../components/Header"
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <main>
            <Header />
            <section className="panel-control">
                <nav>
                    <Link to='vegetarianas'>Recetas Vegetarianas</Link>
                    <Link to='no-vegetarianas'>Recetas No Vegetarianas</Link>
                </nav>
                <section>
                    <Outlet />
                </section>
            </section>
        </main>
    )
}

export default Dashboard