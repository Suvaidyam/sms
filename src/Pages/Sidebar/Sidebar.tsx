import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface sidebarProps {}

const sidebar: FC<sidebarProps> = () => {
    return (
        <>
        <div className='flex fixed w-56 h-screen mt-[9vh]'>

              <div
                id="logo-sidebar"
                className="  w-[90%] h-full    bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                
                >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#10163A]">
                  <ul className="space-y-2 font-medium">

                    <li>
                        <NavLink to={'dashboard'} className='pl-10 text-white'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={'student'} className='pl-10 text-white'>Student</NavLink>
                    </li>
                    <li>
                        <NavLink to={'teacher'} className='pl-10 text-white'>Teacher</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='w-[10%] relative'>
                    <div className=' w-full absolute top-72'>
                      <MdOutlineArrowBackIosNew/>
                    </div>
              </div>
        </div>

        </>
    );
}

export default sidebar;
