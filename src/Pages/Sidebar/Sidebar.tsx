import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentBold, PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaSchoolCircleCheck, FaSchoolLock } from "react-icons/fa6";
import { FaUserTie } from 'react-icons/fa';
import { BiTask } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaImage } from "react-icons/fa";

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = () => {
    const [Tasktoggle, setTasktoggle] = useState<boolean>(false)
    const { sethide, setOutletMyschool ,setTaskCardHide ,setTaskCardHideT} = useDataContext();

    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;

    const YourSchoolBlock = () => {
        setOutletMyschool('block')
    }
    const HandlerToggle = ()=>{
        setTasktoggle((rev) => !rev)
    }
    const hANDAL = ()=>{
        setTaskCardHide(false)
    }
    const AnsHAndeler = () =>{
        setTaskCardHideT(false)
    }
    
    return (
        <>
            <div className='w-full  flex  md:pt-12  overflow-y-auto bg-[#ffffff]  shadow-xl  h-screen   sidebarMy'>
                <div className="w-full font-medium md:mt-5  ">
                    {
                        storedUser.role === "superadmin" && 
                        
                        <>
                            <NavLink to={'superdashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <MdSpaceDashboard size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Dashboard</span>
                            </NavLink>
                        </>
                    }
                    {
                        storedUser.role === "director" &&
                        <>
                            <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <MdSpaceDashboard size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Dashboard</span>
                            </NavLink>
                            <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <PiStudentBold size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Student</span>
                            </NavLink>
                            <NavLink to={'teacher'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <GiTeacher size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Teacher</span>
                            </NavLink>
                            <NavLink to={'principals'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <FaUserTie size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Principals</span>
                            </NavLink>
                            <NavLink to={'registerpage'} onClick={() => sethide('block')} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`} >
                                <PiMicrosoftTeamsLogoFill size={20} />
                                <span className={`pl-2 text-base font-semibold text-gray-900 w-32  `}>Schools</span>
                            </NavLink>
                            <NavLink to={'schoolregister'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <FaSchoolLock size={20} />
                                <span className={`pl-2 text-base font-semibold text-gray-900 w-32   `}>School Register</span>
                            </NavLink>
                           
                        </>
                    }
                    {
                        storedUser.role === "principal" &&
                        <>
                            <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <MdSpaceDashboard size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Dashboard</span>
                            </NavLink>
                            <NavLink to={'imageslider'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <FaImage size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>ImageSlider</span>
                            </NavLink>
                            <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <PiStudentBold size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Student</span>
                            </NavLink>
                            <NavLink to={'teacher'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <GiTeacher size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Teacher</span>
                            </NavLink>
                            <NavLink to={'principals'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <FaUserTie size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Principals</span>
                            </NavLink>
                            <NavLink to={'registerpage'} onClick={() => sethide('block')} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`} >
                                <FaSchoolCircleCheck size={20} />
                                <span className={`pl-2 text-base font-semibold text-gray-900 w-32  `}>Schools</span>
                            </NavLink>
                            
                        </>
                    }

                    {
                        storedUser?.role === "teacher" &&
                        <>
                            <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <MdSpaceDashboard size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Dashboard</span>
                            </NavLink>
                            <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <PiStudentBold size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Student</span>
                            </NavLink>
                            <NavLink to={'teacher'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <GiTeacher size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Teacher</span>
                            </NavLink>



                            <div onClick={HandlerToggle} className={`flex text-base font-semibold mb-2 cursor-pointer  hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <BiTask size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Add Task</span>
                                {Tasktoggle?<MdKeyboardArrowUp size={30} />:<MdKeyboardArrowDown size={30} />}
                            </div>

                            {
                                Tasktoggle &&
                                <>
                                    <NavLink to={'Math'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-pink-500 rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Math</span>
                                    </NavLink>

                                    <NavLink to={'Science'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-green-500 rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Science</span>
                                    </NavLink>

                                    <NavLink to={'Hindi'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-[#187bcd] rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Hindi</span>
                                    </NavLink>

                                    <NavLink to={'English'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-[#03254c] rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>English</span>
                                    </NavLink>

                                    <NavLink to={'SocialScience'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div onClick={AnsHAndeler} className='mt-1 h-1 p-2 bg-[#ffdf22] rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Social Science</span>
                                    </NavLink>
                                </>
                            }

                            <NavLink to={'registerpage'} onClick={() => sethide('block')} className={`flex text-base  font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`} >
                                <FaSchoolCircleCheck size={20} />
                                <span className={`pl-2 text-base font-semibold text-gray-900 w-32  `}>Schools</span>
                            </NavLink>
                           
                        </>
                    }

                    {
                        storedUser.role === "student" &&
                        <>
                            <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <MdSpaceDashboard size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Dashboard</span>
                            </NavLink>
                            <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <PiStudentBold size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32  '>Student</span>
                            </NavLink>

                            <div onClick={()=>{HandlerToggle()}} className={`flex text-base font-semibold mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                <BiTask size={20} />
                                <span className='pl-2 text-base font-semibold text-gray-900 w-32 cursor-pointer '> Task</span>
                                {Tasktoggle?<MdKeyboardArrowUp size={30} />:<MdKeyboardArrowDown size={30} />}
                            </div>

                            {
                                Tasktoggle &&
                                <>
                                    <NavLink to={'MathStudent'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-pink-500 rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Math</span>
                                    </NavLink>

                                    <NavLink to={'ScienceStudent'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-green-500 rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Science</span>
                                    </NavLink>

                                    <NavLink to={'HindiStudent'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-[#187bcd] rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Hindi</span>
                                    </NavLink>

                                    <NavLink to={'EnglishStudent'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div className='mt-1 h-1 p-2 bg-[#03254c] rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>English</span>
                                    </NavLink>

                                    <NavLink to={'SocialScienceStudent'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 pl-10 pr-4 py-2 rounded transition duration-300`}>
                                        <div onClick={AnsHAndeler} className='mt-1 h-1 p-2 bg-[#ffdf22] rounded-full'>
                                        </div>
                                        <span onClick={AnsHAndeler} className='pl-2 text-base font-medium text-gray-800 w-32  '>Social Science</span>
                                    </NavLink>
                                </>
                            }

                           
                            <NavLink to={'schoolpage'} onClick={YourSchoolBlock} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                <FaSchoolCircleCheck size={20} />
                                <span className='pl-2 text-base font-medium text-gray-900 w-32  '> Schools</span>
                            </NavLink>
                        </>
                    }
                </div>
            </div>

        </>
    );
}

export default Sidebar;
