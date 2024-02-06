import type { FC } from 'react';

interface SchoolCircularsProps { }

const SchoolCirculars: FC<SchoolCircularsProps> = () => {
    return (
        <>
            <div className='bg-yellow-600 p-4 rounded-lg'>
                <h1 className='text-2xl font-bold text-white'>School Circulars</h1>
                <p className='text-white'>Click Here to View School Circulars</p>
            </div>
        </>
    )
}

export default SchoolCirculars;
