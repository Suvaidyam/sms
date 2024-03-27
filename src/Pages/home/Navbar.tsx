import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import NavbarMobile from './NavbarMobile';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {
    const [MobileMunu, setMobileMunu] = useState(false);

    const mobileMenuHAndler = () => {
        setMobileMunu((toggle)=>!toggle)
    }
    return (
        <>
            <nav className='fixed z-50 w-full'>
                <div className='relative  w-full h-14 pt-2 pb-3 bg-white border-b'>
                    <div className='absolute sm:hidden'>
                        <TiThMenu onClick={mobileMenuHAndler} size={30} className='text-[#28384c] mt-1' />
                    </div>
                    <div className='flex pb-1 justify-between w-[80%] mx-auto'>
                        <div className='w-44 h-12'>
                            <img className='w-full h-full' src='data:image/png;base64,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' alt='school' />
                        </div>

                        <Link to={'/login'} className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-[#28384c] transition duration-300 ease-out border-2 border-[#28384c] rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#28384c] group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-[#28384c] transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                            <span className="relative invisible">Login</span>
                        </Link>
                    </div>

                </div>
                <nav className="bg-navy-blue px-4 py-3 bg-[#28384c] hidden sm:block ">
                    <div className="w-[80%] mx-auto flex justify-between items-center">

                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </nav>
            {
                MobileMunu ? <NavbarMobile /> : null
            }
            
        </>
    );
}

export default Navbar;
