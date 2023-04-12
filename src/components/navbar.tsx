import CurrentUserSelector from "./current-user-selector"

function NavBar() {
    return (
        <nav className="p-8 flex justify-between items-center">
            <span className="text-xl font-bold tracking-wider">
                TaskHive
            </span>
            <span>
                <span className="mr-1 text-gray-400">Logged In as:</span>
                <CurrentUserSelector />
            </span>
        </nav>
    )
}

export default NavBar