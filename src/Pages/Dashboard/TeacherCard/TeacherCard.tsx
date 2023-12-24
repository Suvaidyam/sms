// TeacherCard.tsx
import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const TeacherCard: React.FC = () => {
    return (
        <div className="card bg-white border border-gray-300 p-4 rounded-md shadow-md">
            <div className='flex items-center space-x-4'>
                <FaChalkboardTeacher className="icon" />
                <h2 className="text-xl font-bold">Teacher</h2>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">Total: 10101</p>
            </div>
        </div>
    );
};

export default TeacherCard;
