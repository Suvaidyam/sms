import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface sidebarProps {}

const sidebar: FC<sidebarProps> = () => {
    return (
        <>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-56 h-screen pt-[9vh] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
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
        </aside>

        </>
    );
}

export default sidebar;
