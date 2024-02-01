import { useEffect,useState, type FC } from 'react';
import Http from '../../Services/Http';

interface TeacherProps {}

const Teacher: FC<TeacherProps> = () => {
    const  [teacherData, setteacherData] = useState<any>([]);
    
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    const userIdmain = storedUser.id;
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
                else if (userRole === 'teacher') {
                    const availableTeachers = AllTeacher.filter((teacher: any) => teacher._id === userIdmain);
                    setteacherData(availableTeachers);
                    const totalTeachersCount = availableTeachers.length;
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
    }, [userId ,userRole ,userIdmain]);
    return (
        <>
                   <>
        <div className="container mx-auto overflow-x-auto">
            <table className="w-full min-w-max bg-white shadow-md rounded-lg">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-2 px-4">Username</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Class</th>
                        <th className="py-2 px-4">Mobile</th>
                        <th className="py-2 px-4">School</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherData.map((teacher: any) => (
                        <tr key={teacher._id} className="border-t">
                            <td className="py-2 text-center px-4">{teacher.username}</td>
                            <td className="py-2 text-center px-4">{teacher.email}</td>
                            <td className="py-2 text-center px-4">{teacher.role}</td>
                            <td className="py-2 text-center px-4">{teacher.userClass}</td>
                            <td className="py-2 text-center px-4">{teacher.mobile}</td>
                            <td className="py-2 text-center px-4">{teacher.school.schoolname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
        </>
    );
}

export default Teacher;
 