import { NavLink } from "react-router-dom"

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'} className={({isActive}) => isActive ? "relative text-6 text-orange-600 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[35%] md:after:w-[120%] after:h-0.5 after:bg-orange-600 " : "relative text-6 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[0%] hover:after:w-[35%]  hover:md:after:w-[120%] after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:text-orange-600 duration-200 transition-all"}>Home</NavLink>
            <NavLink to={'/mens'} className={({isActive}) => isActive ? "relative text-6 text-orange-600 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[33%] md:after:w-[120%] after:h-0.5 after:bg-orange-600 " : "relative text-6 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[0%] hover:after:w-[33%]  hover:md:after:w-[120%] after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:text-orange-600 duration-200 transition-all"}>Men's</NavLink>
            <NavLink to={'/womens'} className={({isActive}) => isActive ? "relative text-6 text-orange-600 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[50%] md:after:w-[120%] after:h-0.5 after:bg-orange-600 " : "relative text-6 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[0%] hover:after:w-[50%]  hover:md:after:w-[120%] after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:text-orange-600 duration-200 transition-all"}>Women's</NavLink>
            <NavLink to={'/kids'} className={({isActive}) => isActive ? "relative text-6 text-orange-600 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[27%] md:after:w-[120%] after:h-0.5 after:bg-orange-600 " : "relative text-6 font-semibold after:content-[''] after:rounded-full after:absolute after:-left-1 after:bottom-0 after:w-[0%] hover:after:w-[27%]  hover:md:after:w-[120%] after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:text-orange-600 duration-200 transition-all"}>Kid's</NavLink>
        </nav>
    )
}

export default Navbar 