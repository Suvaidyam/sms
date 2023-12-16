import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentBold ,PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaSchoolCircleCheck ,FaSchoolLock} from "react-icons/fa6";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const { sethide } = useDataContext();

    return (
        <>
            <div className='flex w-full h-screen mt-[9vh]'>
                <div
                    id="logo-sidebar"
                    className="w-full h-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="h-full px-5 pb-4 overflow-y-auto bg-[#fa4454]">
                        <ul className="space-y-2 font-medium">
                            <li className='flex text-white'>
                                <MdSpaceDashboard size={30} />
                                <NavLink to={'dashboard'} className='pl-2 text-white'>Dashboard</NavLink>
                            </li>
                            <li className='flex text-white'>
                                <PiStudentBold size={30}/>
                                <NavLink to={'student'} className='pl-2 text-white'>Student</NavLink>
                            </li>
                            <li className='flex text-white'>
                                <GiTeacher size={30} />
                                <NavLink to={'teacher'} className='pl-2 text-white'>Teacher</NavLink>
                            </li>
                            <li className='flex text-white'>
                                <PiMicrosoftTeamsLogoFill size={30}/>
                                <NavLink to={'registerpage'} onClick={() => sethide('block')} className='pl-2 text-white'>Register</NavLink>
                            </li>
                            <li className='flex text-white'>
                                <FaSchoolLock size={30}/>
                                <NavLink to={'schoolregister'} className='pl-2 text-white'>School Register</NavLink>
                            </li>
                            <li className='flex text-white'>
                                <FaSchoolCircleCheck size={30}/>    
                                <NavLink to={'yourschools'} className='pl-2 text-white'>Your Schools</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
