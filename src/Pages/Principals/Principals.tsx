import { useEffect, useState, type FC } from 'react';
import Http from '../../Services/Http';

interface PrincipalsProps { }

const Principals: FC<PrincipalsProps> = () => {
    const [principalData, setprincipalData] = useState<any>([]);
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    const userRole = storedUser.role;
    // console.log(userRole, "vishal");

    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: '/auth/seenuser',
                    method: 'get',
                    data: { role: "principal" }
                });
                const Allprincipal = res.data.user;
                if (userRole === 'director') {
                    setprincipalData(Allprincipal);
                    const totalprincipalCount = Allprincipal.length;
                     sessionStorage.setItem('totalPrincipal', totalprincipalCount);
                } else {
                    const availlableStudent = Allprincipal.filter((principal: any) => principal.school?._id === userId);
                    setprincipalData(availlableStudent);
                    const totalprincipalCount = availlableStudent.length;
                    sessionStorage.setItem('totalPrincipal', totalprincipalCount);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchdata();
    }, [userId,userRole]);
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
                        {principalData.map((teacher: any) => (
                            <tr key={teacher._id} className="border-t">
                                <td className="py-2 text-center px-4">{teacher.username}</td>
                                <td className="py-2 text-center px-4">{teacher.email}</td>
                                <td className="py-2 text-center px-4">{teacher.role}</td>
                                <td className="py-2 text-center px-4">{teacher.mobile}</td>
                                <td className="py-2 text-center px-4">{teacher.school.schoolname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Principals;
