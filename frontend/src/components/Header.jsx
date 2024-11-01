import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/img/logo2.png";
import Navbar from "../components/Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);

    return (
        <header>
            <div className='bg-white fixed top-0 left-0 right-0 flex justify-between items-center p-padding2 lg:p-padding1 shadow-md'>
                <div className='md:hidden'>
                    {!menuOpened? (
                        <MdMenu className="icons1 cursor-pointer hover:ring-orange-600 ring-1 p-1 ring-brownC w-7 h-7 rounded-full transition-all duration-300" onClick={toggleMenu} />
                    ) : (
                        <MdClose className="icons1 cursor-pointer hover:ring-orange-600  ring-1 p-1 ring-brownC w-7 h-7 rounded-full transition-all duration-300" onClick={toggleMenu}/>
                    )}
                    
                    <div className='flex justify-center items-center'>
                        <Navbar containerStyles={!menuOpened?"md:hidden flex flex-col gap-y-6 fixed top-16 p-padding3 bg-white shadow-md w-60 h-full ring-1 ring-slate-900/5 transition-all duration-300 -left-[100%]":"md:hidden flex flex-col gap-y-6 fixed top-16 left-0 p-padding3 bg-white shadow-md w-60 h-full ring-1 ring-slate-900/5 transition-all duration-300"}/>
                    </div>
                </div>

                <div>
                    <Link><img src={logo} alt = "" width={100} /> </Link>
                </div>

                <div className='hidden md:block'>
                    <Navbar containerStyles={"md:flex md:gap-10 lg:gap-20"}/>
                </div>

                <div className={"flex gap-7 items-center"}>
                <NavLink to={"cart-page"} className="btn-car flex group">
                    <FaOpencart className="icons1 cursor-pointer ring-1 p-1 ring-brownC w-7 h-7 rounded-full transition-all duration-300 group-hover:ring-orange-600" />
                    <span className="textC relative flex items-center justify-center text-white w-5 h-5 bg-orange-600 rounded-full -top-2 -left-2">0</span>
                </NavLink>

                    <NavLink to={"logout"} className={"btn-log flex items-center justify-center gap-3 bg-orange-600 hover:bg-white border-2 hover:text-orange-600 border-orange-600 text-white w-32 h-9 rounded-3xl transition-all duration-300"}>
                        <CiLogout className='icons2 size-5'/>
                        Logout
                    </NavLink>
                </div>
                {/*<button className='bg-orange-800 text-whiteC w-32 h-9 rounded-3xl text-lg font-bold hover:bg-brownC duration-200'>Login</button>*/}
            </div>
        </header>
    )
}

export default Header 