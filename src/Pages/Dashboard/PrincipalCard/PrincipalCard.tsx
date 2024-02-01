import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import Http from "../../../Services/Http";

const PrincipalCard: React.FC = () => {
    const totalPrincipal = sessionStorage.getItem("totalPrincipal");
    const [, setprincipalData] = useState<any>([]);
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    const userRole = storedUser?.role;
    // console.log(userRole, "vishal");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: "/auth/seenuser",
                    method: "get",
                    data: { role: "principal" },
                });
                const Allprincipal = res.data.user;
                if (userRole === "director") {
                    setprincipalData(Allprincipal);
                    const totalprincipalCount = Allprincipal?.length;
                     sessionStorage.setItem(
                        "totalPrincipal",
                        totalprincipalCount
                    );
                } else {
                    const availlableStudent = Allprincipal.filter(
                        (principal: any) => principal.school?._id === userId
                    );
                    setprincipalData(availlableStudent);
                    const totalprincipalCount = availlableStudent?.length;
                     sessionStorage.setItem(
                        "totalPrincipal",
                        totalprincipalCount
                    );
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchdata();
    }, [userRole ,userId]);
    const teacherHandle = () => {
        if (userRole === "student") {
            return null;
        }
        else if (userRole === "teacher") {
            return null;
        }
        else {
            navigate("/home/principals");
        }
    };

    return (
        <div
            onClick={teacherHandle}
            className="card bg-white border border-gray-300 p-4 rounded-md cursor-pointer shadow-md">
            <div className="flex items-center space-x-4">
                <FaUserTie className="icon" />
                <h2 className="text-xl font-bold"> Principals</h2>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">Total: {totalPrincipal}</p>
            </div>
        </div>
    );
};

export default PrincipalCard;
