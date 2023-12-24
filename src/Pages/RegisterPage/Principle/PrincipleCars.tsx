import type { FC } from 'react';
import { useDataContext } from '../../../Context/DataContext';
import { GiOfficeChair } from "react-icons/gi";

interface PrincipleCardProps {}

const PrincipleCard: FC<PrincipleCardProps> = () => {
    const {setroleType} = useDataContext();
    return (
        <>
            
                  <div onClick={()=>setroleType('principal')} className='w-full py-8 bg-[#ffffff] border border-stroke shadow-lg  rounded-md'>
                      <h1 className='text-blue-700 flex justify-center w-14 h-14 pt-3 rounded-full iconbg mx-auto mb-1'><GiOfficeChair size={30}/></h1>
                      <h1 className='text-center text-xl font-semibold'>Principle Register</h1>
                  </div>
            

        </>
    );
}

export default PrincipleCard;
