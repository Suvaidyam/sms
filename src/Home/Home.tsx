import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Successful from '../Pages/Massage/Successful';
import { useDataContext } from '../Context/DataContext';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { loginMassage, isMobileSidebarOpen, setisMobileSidebarOpen ,sethideUnhide } = useDataContext()

  const toggleSidebarHandler = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const toggleProfileHandler = ()=>{
    sethideUnhide(true)
  }
  return (
    <>
      <div  className='w-full h-screen dark:bg-gray-900 overflow-hidden'>
        <Navbar />
        <div onClick={toggleProfileHandler} className='flex w-full relative'>
          {
            isSidebarOpen && <div className='w-64 hidden md:block'><Sidebar /></div>
          }
          <div onClick={() => setisMobileSidebarOpen(false)} className='w-64 z-50 top-16 fixed md:hidden'>
            {
              isMobileSidebarOpen && <Sidebar />
            }

          </div>
          <div className='w-full'>
            <div className='mt-[9vh] h-screen overflow-y-auto   pb-20'>
              <div className='flex w-full'>
                <div className='w-[3%] hidden md:block'>
                  <div onClick={toggleSidebarHandler} className='w-full text-gray-400 mt-64'>
                    {isSidebarOpen ? <MdOutlineArrowBackIosNew size={30} /> : <MdArrowForwardIos size={30} />}
                  </div>
                </div>
                <div className='w-full md:mr-10 '>
                  <Outlet />
                </div>

              </div>

              {loginMassage ? <Successful /> : null}

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
