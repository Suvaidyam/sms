// TeacherCard.tsx
import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Http from '../../../Services/Http';

const TeacherCard: React.FC = () => {
    const NumberTeachers = sessionStorage.getItem('totalTeachers');
    const  [, setteacherData] = useState<any>([]);
    
    const navigate = useNavigate()

    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    // const userIdmain = storedUser.id;
    const userRole = storedUser.role;
    
    
    useEffect(() => {
        const fetchdata = async () => {
            try { 
                let res = await Http({
                    url: '/auth/seenuser',
                    method: 'get', 
                    data: {role:"teacher"} 
                });
                const AllTeacher = res.data.user;
                if (userRole === 'director') {
                    setteacherData(AllTeacher);
                    const totalTeachersCount = AllTeacher.length;
                     sessionStorage.setItem('totalTeachers',totalTeachersCount);
                }
               
                else{
                    const availableTeachers = AllTeacher.filter((teacher: any) => teacher.school._id === userId);
                    setteacherData(availableTeachers);
                    const totalTeachersCount = availableTeachers.length;
                     sessionStorage.setItem('totalTeachers',totalTeachersCount);
                }
                
              
                
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchdata();
    }, [userId , userRole]);

    const teacherHandle = ()=>{
        if (userRole === 'student') {
            return null
        }
        
        else{
            navigate('/home/teacher')
        }
        
    }
    return ( 
        <div onClick={teacherHandle} className="card bg-white border border-gray-300 p-4 cursor-pointer rounded-md shadow-md">
            <div className='flex items-center space-x-4'>
                <FaChalkboardTeacher className="icon" />
                <h2 className="text-xl font-bold">Teacher</h2>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">Total: {NumberTeachers}</p>
            </div>
        </div>
    );
};

export default TeacherCard;
