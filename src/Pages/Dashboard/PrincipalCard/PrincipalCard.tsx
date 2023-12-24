
import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const PrincipalCard: React.FC = () => {
    return (
        <div className="card bg-white border border-gray-300 p-4 rounded-md shadow-md">
            <div className='flex items-center space-x-4'>
                <FaUserTie className="icon" />
                <h2 className="text-xl font-bold"> Principals</h2>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">Total: 10101</p>
            </div>
        </div>
    );
};

export default PrincipalCard;
