// StudentCard.tsx
import React, { useEffect,  } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Http from "../../../Services/Http";

const StudentCard: React.FC = () => {
    const NumberStudent = sessionStorage.getItem("totalStudents");
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    // const studentID = storedUser.id;
    const userRole = storedUser.role;
    // console.log(userRole);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: "/auth/seenuser",
                    method: "get",
                    data: { role: "student" },
                });
                const AllStudent = res.data.user;
                if (userRole === "director") {
                    const totalStudentsCount = AllStudent.length;
                     sessionStorage.setItem(
                        "totalStudents",
                        totalStudentsCount
                    );
                } else {
                    const availlableStudent = AllStudent.filter(
                        (student: any) => student.school._id === userId
                    );
                    const totalStudentsCount = availlableStudent.length;
                     sessionStorage.setItem(
                        "totalStudents",
                        totalStudentsCount
                    );
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchdata();
    }, [userRole ,userId]);
    const studentHandle = () => {
        navigate("/home/student");
    };
    return (
        <div
            onClick={studentHandle}
            className="card bg-white border border-gray-300 p-4 rounded-md shadow-md cursor-pointer">
            <div className="flex items-center space-x-4">
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
