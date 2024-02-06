import type { FC } from 'react';

interface AdmissionOpenProps { }

const AdmissionOpen: FC<AdmissionOpenProps> = () => {
    return (
        <>
            <div className='bg-pink-600 p-4 rounded-lg'>
                    <h1 className='text-2xl font-bold text-white'>Admission Open</h1>
                    <p  className='text-white'>Click Here to Apply Online</p>
            </div>
        </>
    );
}

export default AdmissionOpen;
