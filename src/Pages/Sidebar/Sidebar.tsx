import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentBold, PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaSchoolCircleCheck, FaSchoolLock } from "react-icons/fa6";

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = () => {

    const { sethide, setOutletMyschool } = useDataContext();
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const YourSchoolBlock = () => {
        setOutletMyschool('block')
    }
    return (
        <>
            <div className='w-56 px-5 pb-4 md:pt-12  overflow-y-auto bg-[#ffffff]  shadow-xl  h-screen   sidebarMy'>
                <div
                    id="logo-sidebar"
                    className="w-full h-full  flex  "
                >
                    <ul className=" font-medium md:mt-5  mx-auto">
                        {
                            storedUser.role === "director" &&
                            <>
                                <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <MdSpaceDashboard size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Dashboard</span>
                                </NavLink>
                                <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <PiStudentBold size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Student</span>
                                </NavLink>
                                <NavLink to={'teacher'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                    <GiTeacher size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Teacher</span>
                                </NavLink>
                                <NavLink to={'registerpage'} onClick={() => sethide('block')} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`} >
                                    <PiMicrosoftTeamsLogoFill size={20} />
                                    <span className={`pl-2 text-base font-semibold text-gray-900 `}>Register</span>
                                </NavLink>
                                <NavLink to={'schoolregister'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                    <FaSchoolLock size={20} />
                                    <span className={`pl-2 text-base font-semibold text-gray-900  `}>School Register</span>
                                </NavLink>
                                <NavLink to={'schoolpage'} onClick={YourSchoolBlock} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <FaSchoolCircleCheck size={20} />
                                    <span className='pl-2 text-base font-medium text-gray-900 '>Your Schools</span>
                                </NavLink>
                            </>
                        }
                        {
                            storedUser.role === "principal" &&
                            <>
                                <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <MdSpaceDashboard size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Dashboard</span>
                                </NavLink>
                                <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <PiStudentBold size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Student</span>
                                </NavLink>
                                <NavLink to={'teacher'} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`}>
                                    <GiTeacher size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Teacher</span>
                                </NavLink>
                                <NavLink to={'registerpage'} onClick={() => sethide('block')} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`} >
                                    <PiMicrosoftTeamsLogoFill size={20} />
                                    <span className={`pl-2 text-base font-semibold text-gray-900 `}>Register</span>
                                </NavLink>
                                <NavLink to={'schoolpage'} onClick={YourSchoolBlock} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <FaSchoolCircleCheck size={20} />
                                    <span className='pl-2 text-base font-medium text-gray-900 '>Your Schools</span>
                                </NavLink>
                            </>
                        }

                        {
                            storedUser?.role === "teacher" &&
                            <>
                                <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <MdSpaceDashboard size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Dashboard</span>
                                </NavLink>
                                <NavLink to={'student'} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <PiStudentBold size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Student</span>
                                </NavLink>
                                <NavLink to={'registerpage'} onClick={() => sethide('block')} className={`flex text-base font-semibold text-blue-700 mb-2   hover:bg-gray-200 px-4 py-2 rounded transition duration-300`} >
                                    <PiMicrosoftTeamsLogoFill size={20} />
                                    <span className={`pl-2 text-base font-semibold text-gray-900 `}>Register</span>
                                </NavLink>
                                <NavLink to={'schoolpage'} onClick={YourSchoolBlock} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <FaSchoolCircleCheck size={20} />
                                    <span className='pl-2 text-base font-medium text-gray-900 '>Your Schools</span>
                                </NavLink>
                            </>
                        }

                        {
                            storedUser.role === "student" &&
                            <>
                                <NavLink to={'dashboard'} className='flex text-base  font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <MdSpaceDashboard size={20} />
                                    <span className='pl-2 text-base font-semibold text-gray-900 '>Dashboard</span>
                                </NavLink>
                                <NavLink to={'schoolpage'} onClick={YourSchoolBlock} className='flex text-base font-semibold text-blue-700 mb-2  hover:bg-gray-200 px-4 py-2 rounded transition duration-300'>
                                    <FaSchoolCircleCheck size={20} />
                                    <span className='pl-2 text-base font-medium text-gray-900 '>Your Schools</span>
                                </NavLink>
                            </>
                        }
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Sidebar;
