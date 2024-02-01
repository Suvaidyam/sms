import React, { FC, useState, useEffect } from 'react';
import { MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Http from '../Services/Http';
import { useDataContext } from '../Context/DataContext';
import { CiLogout } from "react-icons/ci";

interface NavbarProps { }


const Navbar: FC<NavbarProps> = () => {

  const { userData, setuserData, setmassegeLogout, setisMobileSidebarOpen, hideUnhide, sethideUnhide } = useDataContext()

  const navigate = useNavigate()



  const profileHandler = () => {
    sethideUnhide((rev) => !rev)
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    setuserData(storedUser)
  };

  const schoolName = userData?.school?.schoolname;
  const userClass: any = userData
  const classs = userClass?.userClass

  const handleSignOut = () => {
    sessionStorage.clear()
    navigate('/')
    setmassegeLogout(true)
    setTimeout(() => {
      setmassegeLogout(false)
    }, 5000);
    const Logout = async () => {
      try {
        let res = await Http({
          url: "/auth/logoutuser",
          method: 'post',
          data: { id: userData?.id }
        });
        console.log(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    Logout();
  }
  const MobiletoggleSidebarHandler = () => {
    setisMobileSidebarOpen((prev) => !prev);
  }

  return (
    <>

      <nav className="fixed top-0 z-50 w-full h-[9vh] bg-[#ffffff] border-b shadowB">
        <div className="px-4 py-3 lg:px-5 lg:pl-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex w-2/4 items-center justify-start rtl:justify-end">
              <button
                onClick={MobiletoggleSidebarHandler}
                type="button"
                className="md:hidden text-base font-semibold text-blue-700"
              >
                <MdMenu size={30} />

              </button>
              <div className="flex  ">

                <span className="self-center absolute  text-gray-900 uppercase sm:text-2xl whitespace-nowrap text-base font-semibold">
                  SCHOOL SMS
                </span>
              </div>
            </div>
            <div className="flex w-2/4 justify-end ">
              <div className="flex   ">
                <div className=' '>
                  <button
                    onClick={profileHandler}
                    type="button"
                    className="flex text-sm font-semibold mr-2 md:mr-10 rounded-full  "
                  >
                    <div className='text-base font-semibold  text-blue-700' >
                      <CgProfile size={30} />
                    </div>

                  </button>

                </div>

              </div>
            </div>
          </div>
          <div className={`container w-[250px] ${!hideUnhide ? '' : 'hidden'}  bg-white p-4 shadow-md rounded-b-md right-2 top-16 md:top-14 border  mx-auto  absolute`} >
            <div className="w-full ">
              <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
              <div className="flex mb-4">
                <label htmlFor="name" className="block text-base font-semibold  text-gray-900">Name: </label>
                <p id="name" className=" text-sm font-semibold  text-gray-900 ml-2 ">{userData?.username}</p>
              </div>
              <div className="flex mb-4">
                <label htmlFor="email" className="block text-base font-semibold  text-gray-900">Email: </label>
                <p id="email" className=" text-sm font-semibold text-gray-900 ml-2">{userData?.email}</p>
              </div>
              <div className="flex mb-4">
                <label htmlFor="mobile" className="block text-base font-semibold  text-gray-900">Mobile: </label>
                <p id="mobile" className=" text-sm font-semibold text-gray-900 ml-2">{userData?.mobile}</p>
              </div>
              {
                userData?.role !== 'director' && <>

                  <div className="flex mb-4">
                    <label htmlFor="school" className="block text-base font-semibold  text-gray-900">School: </label>
                    <p id="school" className=" text-sm font-semibold text-gray-900 ml-2">{schoolName}</p>
                  </div>
                </>
              }
              <div className="flex mb-4">
                <label htmlFor="role" className="block text-base font-semibold  text-gray-900">Role: </label>
                <p id="role" className=" text-sm font-semibold text-gray-900 ml-2">{userData?.role}</p>
              </div>
              {
                userData?.role !== 'principal'&& <>
                  <div className="flex mb-4">
                    <label htmlFor="role" className="block text-base font-semibold  text-gray-900">Class: </label>
                    <p id="role" className=" text-sm font-semibold text-gray-900 ml-2">{classs}</p>
                  </div>
                </>
              }
              <button onClick={handleSignOut} className="flex w-full text-base font-semibold text-black border-t pt-4 hover:text-blue-700">
                <CiLogout size={20} />
                <span className='ml-4 pb-1'> Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>



    </>
  );
}

export default Navbar;
