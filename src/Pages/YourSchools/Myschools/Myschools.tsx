import type { FC } from 'react';

interface MyschoolsProps {}

const Myschools: FC<MyschoolsProps> = () => {
    const schoolString  = localStorage.getItem('school');
    const school = schoolString ? JSON.parse(schoolString):null;
    console.log(school);
    
    return (
        <><div className='w-full'>
                <div className='w-full flex bg-black text-white py-4 mb-2 rounded-md'>
                     <div className="w-[25%] h-20 ml-5">
                        <img src={`http://localhost:3000/${school.logo}`} alt='school' className='w-full h-full rounded-md' />
                     </div>
                     <div className="w-[75%] h-20">
                        <h1 className="text-5xl font-bold text-center">{school.schoolname}</h1>
                        <h1 className="text-xl font-medium text-center">Address: {school.location}</h1>
                     </div>
                </div>
                <div className='flex justify-center bg-white shadow-md border-2 border-yellow-600  rounded-full'>
                     <div className='px-4 py-3 bg-yellow-600 ml-5'>Principal</div>
                     <div className='px-4 py-3 bg-yellow-600 ml-5'>Teachers</div>
                     <div className='px-4 py-3 bg-yellow-600 ml-5'>Students</div>
                </div>

        </div>
        </>
    );
}

export default Myschools;
