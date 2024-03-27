import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

interface NavbarProps { }

const NavbarMobile: FC<NavbarProps> = () => {
    return (
        <>
          
                <nav className="bg-navy-blue w-[60%] h-64 fixed z-50 px-4 py-3 bg-[#28384c] rounded-br-md mt-[55px] ">
                    <div className="w-[80%] mx-auto flex justify-between items-center">

                        <ul className=" ">
                            <li className='mb-3'>
                                <Link to="/" className="text-white hover:text-gray-300 ">Home</Link>
                            </li>
                            <li className='mb-3'>
                                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                            </li>
                            <li className='mb-3'>
                                <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                            </li>
                            <li className='mb-3'>
                                <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

      

        </>
    );
}

export default NavbarMobile;
