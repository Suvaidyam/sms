import React, { FC, useState ,useEffect } from 'react';
import { MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link ,useNavigate } from 'react-router-dom';
import Http from '../Services/Http';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [hideUnhide, sethideUnhide] = useState<boolean>(true);
  const [userData, setuserData] = useState<any | null>(null);
 

  const navigate = useNavigate()
  
  
  const profileHandler = ()=>{
    sethideUnhide((rev)=>!rev)
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    setuserData(storedUser)
  };
  
  
  const handleSignOut = ()=>{
    sessionStorage.clear()
    navigate('/')
    
    const Logout = async () => {
      try {
        let res = await Http({
          url: "/auth/logoutuser",
          method: 'post',
          data: { id:userData?.id }
        });
      } catch (error) {
        console.log(error);
      }
    };
    Logout();
  }
  
  
    return (
        <> 

        <nav className="fixed top-0 z-50 w-full h-[9vh] bg-[#fa4454]  ">
          <div className="px-3 py-3 lg:px-5 lg:pl-3 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  
                  type="button"
                  className="md:hidden text-white"
                >
                  <MdMenu size={30}/>

                </button>
                <div  className="flex ms-2 md:me-24">
                  
                  <span className="self-center text-2xl font-bold sm:text-2xl whitespace-nowrap text-white">
                   Suvaiydam
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3 ">
                  <div className=' '>
                    <button
                      onClick={profileHandler}
                      type="button"
                      className="flex text-sm mr-10 rounded-full focus:ring-4 "
                    >
                     <div className='text-white  ' >
                        <CgProfile size={30}/>
                     </div>
                      
                    </button>
                     
                  </div>
                  
                </div>
              </div>
            </div>
            <div className={`container w-[250px] ${!hideUnhide ? '' : 'hidden'}  bg-white p-4 shadow-md rounded-md left-[80%]  top-12  mx-auto  absolute`} >
                          <div className="w-full ">
                            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
                            <div className="flex mb-4">
                              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name: </label>
                              <p id="name" className=" text-sm  text-gray-900 ml-2 ">{userData?.username}</p>
                            </div>
                            <div className="flex mb-4">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email: </label>
                              <p id="email" className=" text-sm text-gray-900 ml-2">{userData?.email}</p>
                            </div>
                            <div className="flex mb-4">
                              <label htmlFor="mobile" className="block text-sm font-medium text-gray-900">Mobile: </label>
                              <p id="mobile" className=" text-sm text-gray-900 ml-2">{userData?.mobile}</p>
                            </div>
                            <div className="flex mb-4">
                              <label htmlFor="school" className="block text-sm font-medium text-gray-900">Mobile: </label>
                              <p id="school" className=" text-sm text-gray-900 ml-2">{userData?.school}</p>
                            </div>
                            <div className="flex mb-4">
                              <label htmlFor="role" className="block text-sm font-medium text-gray-900">Role: </label>
                              <p id="role" className=" text-sm text-gray-900 ml-2">{userData?.role}</p>
                            </div>
                            <button onClick={handleSignOut} className="bg-blue-500 text-white px-2 py-1 rounded-md">Sign Out</button>
                          </div>
              </div>
          </div>
        </nav>
            
        
            
        </>
    ); 
}

export default Navbar;
