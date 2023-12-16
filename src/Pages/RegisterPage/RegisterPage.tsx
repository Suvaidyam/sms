import { FC, useState } from 'react';
import PrincipleCard from './Principle/PrincipleCars';
import TeacherCard from './Teacher/TeacherCard';
import StudentCard from './Student/StudentCard';
import { Link, Outlet } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext'; 

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
    const {hide, sethide} = useDataContext()
    const [block, setblock] = useState<string>('hidden')

    const registerHandler = ()=>{
        sethide('hidden')
        setblock('block')
    }
    return (
        <>
            <div>
                <div className={`w-[90%] ${hide} mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10`} >
                    <Link to={'register'} onClick={registerHandler}>
                        <PrincipleCard/>
                    </Link>
                    <Link to={'register'} onClick={registerHandler}>
                        <TeacherCard/>
                    </Link>
                    <Link to={'register'} onClick={registerHandler}>
                        <StudentCard/>
                    </Link>
                </div>
                <div className={`w-[90%] ${block} mx-auto`}>
                    <Outlet/>
                 </div>
            </div>
            
            
        </>
    );
}

export default RegisterPage;
