import type { FC } from 'react';
import Successful from '../Massage/Successful';
import Fail from '../Massage/Fail';
import Student from '../Student/Student';
import PrincipalCard from './PrincipalCard/PrincipalCard';
import TeacherCard from './TeacherCard/TeacherCard';
import StudentCard from './StudentCard/StudentCard';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
    return (
        <>
           <div className='flex mt-5'>
                <div className='w-[70%]'>
                    <div className=' grid gap-2 grid-cols-1 md:grid-cols-3 '>
                        <PrincipalCard/>
                        <TeacherCard/>
                        <StudentCard/>
                    </div>
                    <div className='mt-5 '>
                        <Student/>
                    </div>
                    
                </div>
                <div className='w-[30%] '>

                </div>
           </div>
        </>
    );
}

export default Dashboard;
