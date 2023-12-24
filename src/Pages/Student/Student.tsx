import { useEffect,useState, type FC } from 'react';
import Http from '../../Services/Http';

interface StudentProps { }

const Student: FC<StudentProps> = () => {
    // const storedUserString = sessionStorage.getItem("user");
    // const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    // console.log();
    
    const  [studentData, setstudentData] = useState<any>([]);
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: '/auth/seenuser',
                    method: 'get', 
                    data: {role:"student"} 
                });
                const AllStudent = res.data.user;
                setstudentData(AllStudent);
                const totalStudentsCount = AllStudent.length;
                const totalStudent = sessionStorage.setItem('totalStudents',totalStudentsCount);
                
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchdata();
    }, []);

    return (
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
                    {studentData.map((student: any) => (
                        <tr key={student._id} className="border-t">
                            <td className="py-2 px-4">{student.username}</td>
                            <td className="py-2 px-4">{student.email}</td>
                            <td className="py-2 px-4">{student.role}</td>
                            <td className="py-2 px-4">{student.mobile}</td>
                            <td className="py-2 px-4">{student.school}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    );
}

export default Student;
