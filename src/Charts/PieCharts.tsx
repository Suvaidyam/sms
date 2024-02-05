import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {
    BarController,
    DoughnutController,
    LineController,
    PieController,
} from "chart.js";
import Http from "../Services/Http";
Chart.register(
    DoughnutController,
    LineController,
    PieController
);

const MyChart = () => {
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const userId = storedUser.school?._id;
    

    const [male, setmale] = useState('');
    const [feMale, setfeMale] = useState('');
    const [thirdGender, setthirdGender] = useState('');

    console.log(male,feMale,thirdGender);
    

    useEffect(() => {
        const fetchSchool2 = async () => {
            try {
                let res = await Http({
                    url: "/student/getstudent",
                    method: "get",
                    data: {},
                });
                const myschool = res.data.students;
                
                // const data = myschool?.filter((item:any)=>item?.studetuserid?.studetuserid?._id === userId)
                // console.log(data);
                
                
                const filterMale = myschool?.filter((item:any) => item?.gender === "male");
                setmale(filterMale?.length || 0);  

                const filterFeMale = myschool?.filter((item:any) => item?.gender === "female");
                setfeMale(filterFeMale?.length || 0);  

                const filterthirdGender = myschool?.filter((item:any) => item?.gender === "thirdgender");
                setthirdGender(filterthirdGender?.length || 0);

            } catch (error) {
                console.error("Error:", error);
            }
        }
    
        fetchSchool2();
    }, []);
    



    const data = {
        labels: ["Males", "Females", "ThirdGender"],
        datasets: [
            {
                label: "total ",
                data: [male, feMale, thirdGender],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],

                hoverOffset: 4,
            },
        ],
    };

    const options: any = {
        Plugin: {
            length: {
                display: true,
                pogition: "top",
                labels: {
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                    color: "black",
                },
            },
        },
        scales: {
            // x: {
            //     indexAxis: 'category',
            // },
            // y: {
            //     beginAtZero: true,
            // },
        },
    };

    return (
        <>
            {
                <div>
                    <h2 className="text-center text-3xl font-semibold text-gray-900  py-4">
                       Genders
                    </h2>
                    <Pie data={data} options={options} />
                </div>
            }
        </>
    );
};

export default MyChart;
