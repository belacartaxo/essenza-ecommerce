import { Link } from 'react-router-dom';
import logo from "../assets/img/logo2.png"
import Navbar from "../components/Navbar"

const Header = () => {
    return (
        <header>
            <div className='bg-whiteC flex justify-around items-center p-margin1'>
                <Link><img src={logo} alt = "" width={150} /> </Link>
                <div>
                
                </div>
                <Navbar containerStyles={"flex gap-20"}/>
                <button className='bg-orange-800 text-whiteC w-32 h-10 rounded-xl text-lg font-bold hover:bg-brownC duration-200'>Login</button>
            </div>
        </header>
    )
}

export default Header 