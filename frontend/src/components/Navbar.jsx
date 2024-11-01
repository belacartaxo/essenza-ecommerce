import { NavLink } from "react-router-dom"

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'}><div className="text-6 font-semibold hover:text-orange-600 duration-200 transition-all">Home</div></NavLink>
            <NavLink to={'/mens'}><div className="text-6 font-semibold hover:text-orange-600 duration-200 transition-all">Men's</div></NavLink>
            <NavLink to={'/womens'}><div className="text-6 font-semibold hover:text-orange-600 duration-200 transition-all">Women's</div></NavLink>
            <NavLink to={'/kids'}><div className="text-6 font-semibold hover:text-orange-600 duration-200 transition-all">Kid's</div></NavLink>
        </nav>
    )
}

export default Navbar 