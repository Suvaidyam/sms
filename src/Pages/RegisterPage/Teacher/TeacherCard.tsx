import type { FC } from 'react';
import { useDataContext } from '../../../Context/DataContext';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

interface TeacherCardProps {}

const TeacherCard: FC<TeacherCardProps> = () => {
    const { setroleType} = useDataContext();
    return (
        <>
           
                  <div onClick={()=>setroleType('teacher')} className='w-full py-8 bg-[#ffffff] shadow-lg border border-stroke rounded-md'>
                      <h1 className='text-blue-700 flex justify-center w-14 h-14 pt-3 rounded-full iconbg mx-auto mb-1'>
                          <LiaChalkboardTeacherSolid size={30}/>
                      </h1>
                      <h1 className='text-center text-xl font-semibold'>Teacher Register</h1>
                  </div>
            
        </>
    );
}

export default TeacherCard;
