import type { FC } from 'react';
import { useDataContext } from '../../../Context/DataContext';

interface PrincipleCardProps {}

const PrincipleCard: FC<PrincipleCardProps> = () => {
    const {setroleType} = useDataContext();
    return (
        <>
            
                  <div onClick={()=>setroleType('principal')} className='w-full py-14 bg-[#dda758] shadow-md shadow-slate-950 rounded-md'>
                      <h1 className='text-center text-2xl font-bold'>Principle Register</h1>
                  </div>
            

        </>
    );
}

export default PrincipleCard;
