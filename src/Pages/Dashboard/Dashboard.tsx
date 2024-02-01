import type { FC } from "react";
import Successful from "../Massage/Successful";
import Fail from "../Massage/Fail";
import Student from "../Student/Student";
import PrincipalCard from "./PrincipalCard/PrincipalCard";
import TeacherCard from "./TeacherCard/TeacherCard";
import StudentCard from "./StudentCard/StudentCard";
import PieCharts from "../../Charts/PieCharts";
import SuperAdmin from "./SuperAdmin/SuperAdmin";

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    console.log(storedUser.role);

    return (
        <>
            <div className="md:flex  gap-4 p-2 ">
                <div className="w-full md:w-[70%]">
                    <div className=" grid gap-2 grid-cols-1 md:grid-cols-3 ">
                        {storedUser == "superadmin" && (
                            <>
                                <SuperAdmin />
                            </>
                        )}
                        {storedUser?.role == "principal" && (
                            <>
                                <PrincipalCard />
                                <TeacherCard />
                                <StudentCard />
                            </>
                        )}
                        {storedUser?.role == "teacher" && (
                            <>
                                <PrincipalCard />
                                <TeacherCard />
                                <StudentCard />
                            </>
                        )}
                        {storedUser?.role == "student" && (
                            <>
                                <PrincipalCard />
                                <TeacherCard />
                                <StudentCard />
                            </>
                        )}
                    </div>
                    <div className="mt-5 ">{/* <Student/> */}</div>
                </div>
                <div className="w-full md:w-[30%] bg-white border rounded-md h-screen">
                    <PieCharts />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
