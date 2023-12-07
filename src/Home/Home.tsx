import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';
interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <>

        <div className='w-full h-screen bg-slate-300'>


            <div className='w-full '>

                <Navbar/>
                <Sidebar/>


        
                <div className='w-full overflow-y-auto'>

                    <div className='mt-[9vh]'>
                         <Outlet/>
 
                    </div>
                  
                </div>
            </div>

        </div>
            
        </>
    );
}

export default Home;
