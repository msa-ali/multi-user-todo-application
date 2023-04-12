import { Link } from "react-router-dom"
import CurrentUserSelector from "./current-user-selector"

function NavBar() {
    return (
        <nav className="p-8 flex justify-between items-center">
            <span className="text-xl font-bold tracking-wider">
                <Link to="/">TaskHive</Link>
            </span>
            <span className="flex gap-8 justify-center items-center">
                <Link to="/manage-users" className="text-gray-600">Manage Users</Link>
                <span>
                    <span className="mr-1 text-gray-400">Logged In as:</span>
                    <CurrentUserSelector />
                </span>
            </span>
        </nav>
    )
}

export default NavBar