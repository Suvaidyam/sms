import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {
    BarController,
    DoughnutController,
    LineController,
} from "chart.js";
import Http from "../Services/Http";
Chart.register(
    BarController,
    DoughnutController,
    LineController,
);

const BarChart = () => {
    const NumberStudent = sessionStorage.getItem("totalStudents");
    const NumberTeachers = sessionStorage.getItem("totalTeachers");
    const totalPrincipal = sessionStorage.getItem("totalPrincipal");
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    const userRole = storedUser.role;
    const [, setstudentData] = useState<any>([]);
    const [schoolid, setschoolid] = useState('');


    useEffect(() => {

        const fetchSchool2 = async () => {
            try {
                let res = await Http({
                    url: "/auth/seenuser",
                    method: "get",
                    data: {},
                });
                const data = res.data.user;
                console.log(data);



            } catch (error) {
                console.error("Error:", error);

            }
        }
        fetchSchool2();

    }, [])


    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: "/auth/seenuser",
                    method: "get",
                    data: { role: "student" },
                });
                const AllStudent = res.data.user;
                if (userRole === "superadmin") {

                }
                else if (userRole === "director") {
                    setstudentData(AllStudent);
                    const totalStudentsCount = AllStudent.length;
                    sessionStorage.setItem("totalStudents", totalStudentsCount);
                }

                else {
                    const availlableStudent = AllStudent.filter(
                        (student: any) => student.school._id === userId
                    );
                    setstudentData(availlableStudent);
                    const totalStudentsCount = availlableStudent.length;
                    sessionStorage.setItem("totalStudents", totalStudentsCount);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchdata();
    }, [userId, userRole]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: "/auth/seenuser",
                    method: "get",
                    data: { role: "teacher" },
                });
                const AllTeacher = res.data.user;
                if (userRole === "director") {
                    const totalTeachersCount = AllTeacher.length;
                    sessionStorage.setItem("totalTeachers", totalTeachersCount);
                } else {
                    const availableTeachers = AllTeacher.filter(
                        (teacher: any) => teacher.school._id === userId
                    );

                    const totalTeachersCount = availableTeachers.length;
                    sessionStorage.setItem("totalTeachers", totalTeachersCount);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchdata();
    }, [userId, userRole]);
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
                    const totalprincipalCount = Allprincipal.length;
                    sessionStorage.setItem("totalPrincipal", totalprincipalCount);
                } else {
                    const availlableStudent = Allprincipal.filter(
                        (principal: any) => principal.school?._id === userId
                    );
                    const totalprincipalCount = availlableStudent.length;
                    sessionStorage.setItem("totalPrincipal", totalprincipalCount);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchdata();
    }, [userId, userRole]);

    const data = {
        labels: ["Students", "Teachers", "Principals"],
        datasets: [{
            label: 'Member Of School',
            data: [NumberStudent, NumberTeachers, totalPrincipal],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            
            borderColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            
            borderWidth: 0,
            barThickness: 100,
        }]
    };

    const options: any = {
        plugins: {
            length: {
                display: true,
                position: "top",
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
        scales: {
            x: {
                display: true, // Hide x-axis
            },
            y: {
                beginAtZero: true,
                display: false, // Hide y-axis
            },
        },
    };
    

    return (
        <>
            {
                <div className="p-6">
                    <h2 className="text-center text-2xl font-semibold text-gray-900  py-4">
                        {storedUser.school?.schoolname
                            ? storedUser.school?.schoolname
                            : "All Member"}
                    </h2>
                    <Bar data={data} options={options} />
                </div>
            }
        </>
    );
};

export default BarChart;
