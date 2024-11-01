import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo2.png";
import Navbar from "../components/Navbar";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);

    return (
        <header>
            <div className='bg-white flex justify-between items-center p-padding2 lg:p-padding1 shadow-md'>
                <Link><img src={logo} alt = "" width={100} /> </Link>
                <div>
                
                </div>
                <Navbar containerStyles={"hidden md:flex md:gap-10 lg:gap-20"}/>
                <Navbar containerStyles={!menuOpened?"md:hidden flex flex-col gap-y-6 fixed top-16 p-padding3 bg-white rounded-3xl shadow-md w-60 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]":"md:hidden flex flex-col gap-y-6 fixed top-14 right-8 p-padding3 bg-white rounded-3xl rounded-3xl shadow-md w-60 ring-1 ring-slate-900/5 transition-all duration-300"}/>
                <div>
                    {!menuOpened? (
                        <MdMenu 
                            className="icons md:hidden cursor-pointer hover:ring-orange-600 ring-1 p-1 ring-brownC w-7 h-7 rounded-full transition-all duration-300" 
                            onClick={toggleMenu}
                        />
                    ) : (
                        <MdClose className="icons md:hidden cursor-pointer hover:ring-orange-600  ring-1 p-1 ring-brownC w-7 h-7 rounded-full transition-all duration-300" onClick={toggleMenu}/>
                    )}
                </div>
                {/*<button className='bg-orange-800 text-whiteC w-32 h-9 rounded-3xl text-lg font-bold hover:bg-brownC duration-200'>Login</button>*/}
            </div>
        </header>
    )
}

export default Header 