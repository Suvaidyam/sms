import { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext'; 
import YourSchools from './yourschools';

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
    const {OutletMyschool, } = useDataContext()
    // const [block, setblock] = useState<string>('hidden')

    // const registerHandler = ()=>{
    //     sethide('hidden')
    //     setblock('block')
    // }
    return (
        <>
            <div>
                <div className={`w-full  mx-auto  mt-`} >
                    <div className={`${OutletMyschool} `}>
                        
                        <YourSchools/>
                    </div>
                </div>
                <div className={`w-[90%]  mx-auto`}>
                    
                        <Outlet/>
                    
                 </div>
            </div>
            
            
        </>
    );
}

export default RegisterPage;
