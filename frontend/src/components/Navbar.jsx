import { NavLink } from "react-router-dom"

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'}><div className="text-6 font-semibold transform hover:scale-110 hover:text-orange-800 transition-transform duration-200">Home</div></NavLink>
            <NavLink to={'/mens'}><div className="text-6 font-semibold transform hover:scale-110 hover:text-orange-800 transition-transform duration-200">Men's</div></NavLink>
            <NavLink to={'/womens'}><div className="text-6 font-semibold transform hover:scale-110 hover:text-orange-800 transition-transform duration-200">Women's</div></NavLink>
            <NavLink to={'/kids'}><div className="text-6 font-semibold transform hover:scale-110 hover:text-orange-800 transition-transform duration-200">Kid's</div></NavLink>
        </nav>
    )
}

export default Navbar 