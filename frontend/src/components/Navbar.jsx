import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md"

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'}><div><MdHomeFilled />Home</div></NavLink>
            <NavLink to={'/mens'}><div><MdCategory />Men's</div></NavLink>
            <NavLink to={'/womens'}><div><MdShop2 />Women's</div></NavLink>
            <NavLink to={'/kids'}><div><MdContacts />Kid's</div></NavLink>
        </nav>
    )
}

export default Navbar 