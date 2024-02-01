import { useState, type FC } from 'react';
import GeneraleTask from '../../Task/generale/GeneraleTask';
import TeacherPage from '../TeacherSide/TeacherPage';

interface HindiProps { }

const Hindi: FC<HindiProps> = () => {
    const [GanerateTask, setGanerateTask] = useState<boolean>(false)
    const handleGeneraleTaskClose = () =>{
        setGanerateTask((task)=>!task)
    } 
    return (
        <>
            <div  className="max-w-md grid grid-cols-2   mx-auto  bg-white shadow-lg rounded-md">
                <div className='flex text-sm md:text-base font-semibold  p-2 md:p-4 mx-auto '>
                    <h1 className='mt-[5px] mr-2 '>Generale Task</h1>
                    <h1  onClick={handleGeneraleTaskClose} className='text-blue-700 text-2xl font-normal bg-slate-100 h-8 w-8 rounded-full text-center hover:bg-blue-700 hover:text-white cursor-pointer' >+</h1>
                </div>

                <div className='flex text-sm md:text-base font-semibold  p-2 md:p-4 mx-auto'>
                    <h1 className='mt-[5px] mr-2'>Quiz Task</h1>
                    <h1 className='text-blue-700 text-2xl font-normal bg-slate-100 h-8 w-8 rounded-full text-center hover:bg-blue-700 hover:text-white cursor-pointer'>+</h1>
                </div>
            </div>
            {
                GanerateTask && <GeneraleTask onClose1={handleGeneraleTaskClose} Subject={'Hindi'}/>
            }
            {<TeacherPage Subject={'Hindi'} />}
        </>
    );
}

export default Hindi;
