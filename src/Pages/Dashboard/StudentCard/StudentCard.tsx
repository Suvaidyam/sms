// StudentCard.tsx
import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const StudentCard: React.FC = () => {
    const NumberStudent = sessionStorage.getItem('totalStudents');
                console.log(NumberStudent);
    return (
        <div className="card bg-white border border-gray-300 p-4 rounded-md shadow-md">
            <div className='flex items-center space-x-4'>
                <FaUserGraduate className="icon" />
                <h2 className="text-xl font-bold">Student</h2>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">Total: {NumberStudent}</p>
            </div>
        </div>
    );
};

export default StudentCard;
