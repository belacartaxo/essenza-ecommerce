import { NavLink } from "react-router-dom"

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'} className={({isActive}) => isActive ? "active_link" : "deactive_link"}>Home</NavLink>
            <NavLink to={'/mens'} className={({isActive}) => isActive ? "active_link" : "deactive_link"}>Men's</NavLink>
            <NavLink to={'/womens'} className={({isActive}) => isActive ? "active_link after:w-[50%] md:after:w-[110%]" : "deactive_link hover:after:w-[50%] md:hover:after:w-[110%]"}>Women's</NavLink>
            <NavLink to={'/kids'} className={({isActive}) => isActive ? "active_link after:w-[28%] md:after:w-[120%]" : "deactive_link hover:after:w-[28%] md:hover:after:w-[120%]"}>Kid's</NavLink>
        </nav>
    )
}

export default Navbar 