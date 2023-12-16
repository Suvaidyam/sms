import type { FC } from 'react';
import { useDataContext } from '../../../Context/DataContext';
interface StudentCardProps {}

const StudentCard: FC<StudentCardProps> = () => {
    const {setroleType} = useDataContext();
    return (
        <>
            <div  onClick={()=>setroleType('student')}  className='w-full py-14 bg-[#dda758] shadow-md shadow-slate-950 rounded-md'>
                      <h1 className='text-center text-2xl font-bold'>Student Register</h1>
                  </div>
        </>
    );
}

export default StudentCard;
