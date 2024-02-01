import { FC, useState } from 'react';
import PrincipleCard from './Principle/PrincipleCars';
import TeacherCard from './Teacher/TeacherCard';
import StudentCard from './Student/StudentCard';
import { Link, Outlet } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import YourSchools from '../YourSchools/yourschools';
import StRegister1 from './StRegister/StRegister';

interface RegisterPageProps { }

const RegisterPage: FC<RegisterPageProps> = () => {
    const { hide, sethide } = useDataContext()
    const [block, setblock] = useState<string>('hidden')
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;


    const registerHandler = () => {
        sethide('hidden')
        setblock('block')
    };
    return (
        <>
            <div className='w-full '>
                <div className={`w-full ${hide}  grid grid-cols-1 md:grid-cols-4 gap-8 p-4 `} >

                    {
                        storedUser?.role === "director" &&
                        <>
                            <Link to={'register'} onClick={registerHandler} className={``}>
                                <PrincipleCard />
                            </Link>

                            <Link to={'register'} onClick={registerHandler}>
                                <TeacherCard />
                            </Link>

                            <Link to={'register'} onClick={registerHandler} className={``}>
                                <StudentCard />
                            </Link>
                            {/* <Link to={'StRegister'} onClick={registerHandler}>
                                <StRegister1 />
                            </Link> */}
                        </>
                    }
                    {storedUser?.role === 'principal' &&
                        <>
                            <Link to={'register'} onClick={registerHandler}>
                                <TeacherCard />
                            </Link>
                            <Link to={'register'} onClick={registerHandler} className={``}>
                                <StudentCard />
                            </Link>
                            
                        </>
                    }
                    {storedUser?.role === 'teacher' &&
                        <Link to={'register'} onClick={registerHandler} className={``}>
                            <StudentCard />
                        </Link>
                    }

                </div>

            </div>
            <div className={`w-[90%] ${block} mx-auto`}>
                {/* wuefwfguiwgfwuifguiwfuiweuifguiwegfuigewifugweuigfuigweifiuwgeufuweigfuigweuigfuiwegfuigweuigfuigewigfuiwegifgewigfiwegfiwegifgweigfiewgfgweifgi */}
                <Outlet />
            </div>
            <div className={`${hide}`}>
                <YourSchools />
            </div>


        </>
    );
}

export default RegisterPage;
