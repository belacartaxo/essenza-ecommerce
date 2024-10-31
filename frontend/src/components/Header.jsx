import { Link } from 'react-router-dom';
import logo from "../assets/img/logo2.png"
import Navbar from "../components/Navbar"

const Header = () => {
    return (
        <header>
            <div>
                <Link><img src={logo} alt = "" height={100} width={100}/> </Link>
                <div>
                
                </div>
                <Navbar/>
                <div>button</div>
            </div>
        </header>
    )
}

export default Header 