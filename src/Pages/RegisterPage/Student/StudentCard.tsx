import { PiStudentLight } from "react-icons/pi";
import type { FC } from 'react';
import { useDataContext } from '../../../Context/DataContext';
interface StudentCardProps {}


const StudentCard: FC<StudentCardProps> = () => {
    const {setroleType} = useDataContext();
    return (
        <>
            <div  onClick={()=>setroleType('student')}  className='w-full  py-8 bg-[#ffffff] shadow-lg  border border-stroke rounded-md'>
                      <h1 className='text-blue-700 flex justify-center w-14 h-14 pt-3 rounded-full iconbg mx-auto mb-1'>
                           <PiStudentLight size={30}/>
                      </h1>
                      <h1 className='text-center text-xl font-semibold text-gray-900'>Student Register</h1>
                  </div>
        </>
    );
}

export default StudentCard;
