import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';
import { MdOutlineArrowBackIosNew ,MdArrowForwardIos } from 'react-icons/md';

interface HomeProps {} 

const Home: FC<HomeProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarHandler = () => {
    setIsSidebarOpen((prev) => !prev);
  }; 

  return ( 
    <>
      <div className='w-full h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden'>
        <Navbar />
        <div className='flex w-full overflow-hidden '>
          <div className={`w-64 h-screen ${isSidebarOpen ? ' ' : 'hidden'} `}>
            <Sidebar />
          </div>
          <div className='w-[5%] hidden md:block  '>
            <div onClick={toggleSidebarHandler} className=' w-full text-gray-400 mt-80'>
              {isSidebarOpen ? <MdOutlineArrowBackIosNew size={30}/> : <MdArrowForwardIos size={30} /> }
            </div>
          </div>
          <div className='w-full overflow-hidden'>
            <div className=' mt-[9vh] h-screen  bg-gray-50 dark:bg-gray-900 overflow-y-auto pb-20'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
