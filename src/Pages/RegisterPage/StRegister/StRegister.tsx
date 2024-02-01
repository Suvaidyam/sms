import type { FC } from 'react';
import { PiStudentFill, PiStudentLight } from 'react-icons/pi';
import { useDataContext } from '../../../Context/DataContext';
import { FaRegIdBadge } from 'react-icons/fa6';

interface StRegister1Props { }

const StRegister1: FC<StRegister1Props> = () => {
    const {setroleType} = useDataContext();

    return (
        <>
        {/* onClick={() => setroleType2('student')} */}
            <div  className='w-full  py-8 bg-[#ffffff] shadow-lg  border border-stroke rounded-md'>
                <h1 className='text-blue-700 flex justify-center w-14 h-14 pt-3 rounded-full iconbg mx-auto mb-1'>
                    <PiStudentFill size={30} />
                </h1>
                <h1 className='text-center text-xl font-semibold text-gray-900'>Student Register</h1>
            </div>
        </>
    );
}

export default StRegister1;
