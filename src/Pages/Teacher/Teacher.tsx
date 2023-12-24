import { useEffect,useState, type FC } from 'react';
import Http from '../../Services/Http';

interface TeacherProps {}

const Teacher: FC<TeacherProps> = () => {
    const  [teacherData, setteacherData] = useState<any>([]);
    console.log(teacherData);
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: '/auth/seenuser',
                    method: 'get', 
                    data: {role:"teacher"} 
                });
                const AllTeacher = res.data.user;
                setteacherData(AllTeacher);
                const totalTeachersCount = AllTeacher.length;
                const totalTeachers = sessionStorage.setItem('totalTeachers',totalTeachersCount);
                
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchdata();
    }, []);
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
                        <th className="py-2 px-4">Mobile</th>
                        <th className="py-2 px-4">School</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherData.map((teacher: any) => (
                        <tr key={teacher._id} className="border-t">
                            <td className="py-2 px-4">{teacher.username}</td>
                            <td className="py-2 px-4">{teacher.email}</td>
                            <td className="py-2 px-4">{teacher.role}</td>
                            <td className="py-2 px-4">{teacher.mobile}</td>
                            <td className="py-2 px-4">{teacher.school.schoolname}</td>
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
 