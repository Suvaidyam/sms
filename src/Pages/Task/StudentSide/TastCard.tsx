import React, { FC, useEffect, useState } from 'react';
import Http from '../../../Services/Http';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDataContext } from '../../../Context/DataContext';
import TaskPage from './TaskPage';

interface TaskCardProps {
    Subject?: string;

}

const TaskCard: FC<TaskCardProps> = ({ Subject }) => {
    const user = sessionStorage.getItem('user');
    const myuser = user ? JSON.parse(user) : null;
    const userClass = myuser.userClass;
    const schoolid = myuser?.school?._id;
    const studentid = myuser.id

    const [TaskId, setTaskId] = useState("")
    const [MytaskId, setMytaskId] = useState([]);
    const [taskmatch, settaskmatch] = useState<string[]>([])
    const [taskData, settaskData] = useState<any[]>([]);
    const { TaskCardHide, setTaskCardHide } = useDataContext();
    const [CheckAnswer, setCheckAnswer] = useState<any | []>([]);
    const [match2, setmatch2] = useState<any[]>([]);
    console.log(taskData);

    const subject = Subject;
    useEffect(() => {
        const featchData = async () => {
            try {
                let res = await Http({
                    url: "/task/gettask",
                    method: "get",
                    data: { userClass, schoolid, subject }
                })
                const data = res.data.Task;
                const taskid = data.map((item: any) => (
                    setMytaskId(item._id)
                ))
                settaskData(res.data.Task)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        featchData()

        const featchData2 = async () => {
            try {
                let res = await Http({
                    url: "/task/getreplytask",
                    method: "get",
                    data: {}
                });
                const data = res.data.Task;
                console.log(data);
                const checkanswer = data.filter((item: any) => (
                    item?.studentid?._id == studentid && item?.taskid?.subject === subject
                ));
                const checkanswerGrad = checkanswer?.filter((item: any) => (
                    item?.grad !== undefined && item?.grad !== null && item?.grad !== "" 
                ))
                
                setCheckAnswer(checkanswer);
                console.log(checkanswer);
                

                // const GetTaskId = taskData.map((item: any) => item?._id).flat();

                // console.log(checkanswerGrad);
                
                // const gradid = checkanswerGrad?.filter((item: any) => GetTaskId.includes(item?.taskid?._id));

                // const MyGetTaskId = gradid.map((item: any) => item?._id).flat();

                // console.log(MyGetTaskId);
                
                // setmatch2(MyGetTaskId)

                const taskIdswithGrad = checkanswer.map((item: any) => (item?.taskid?._id)).flat();;
                

                settaskmatch(taskIdswithGrad);
                console.log(taskmatch);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        featchData2()
    }, [userClass, schoolid, subject, MytaskId, setMytaskId, studentid])

    const formatDateToIndianFormat = (dateString: any) => {
        const options: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const indianDateFormat = new Date(dateString).toLocaleDateString('en-IN', options);
        return indianDateFormat;
    };
    const taskpageHandler = (task: any) => {
        setTaskId(task._id)
        // console.log(taskId); 
        // navigate(`/home/TaskPage/${taskId}`);
        setTaskCardHide(true)
    }


    const formatDateToIndianFormat2 = (dateString: any) => {
        const options: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const indianDateFormat = new Date(dateString).toLocaleDateString('en-IN', options);
        return indianDateFormat;
    };
    const ManageGrade = (garde:any)=>{
        if (garde == undefined) {
            return <p className='text-yellow-500'>Teacher Not Check Your Answer</p>
        }else{
            return <p className='text-green-500'>{garde} /100</p>
        }
        
    }

    return (

        TaskCardHide ? <TaskPage id={TaskId} /> :
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>

                {
                    taskData && taskData?.map((task: any, index: any) => (
                        <>
                            {
                                !taskmatch.includes(task._id) &&
                                <>
                                    <div
                                        key={index}
                                        className={`h-full p-4 shadow-md rounded-md ${taskmatch.includes(task._id) ? "bg-black bg-opacity-20" : "bg-white cursor-pointer"
                                            }`}
                                        onClick={() => {
                                            if (!taskmatch.includes(task._id)) {
                                                taskpageHandler(task);
                                            }
                                        }}
                                    >
                                        <div className={` ${taskmatch.includes(task._id) ? " bg-blue-700 bg-opacity-40" : " bg-blue-700 "}  rounded-md h-40`}>
                                            <h1 className="ml-2 text-white text-4xl font-bold text-center py-16">{task.subject}</h1>
                                        </div>

                                        <div className="flex items-center mb-4 mt-4">
                                            <h2 className={`  text-lg font-bold ${taskmatch.includes(task._id) ? "text-black text-opacity-50" : " text-black"}`}>{task.title}</h2>
                                        </div>

                                        <div className=" text-sm text-gray-500">
                                            {/* Due Date is now placed above Start Date */}
                                            <p className={` py-2 px-1 ${taskmatch.includes(task._id) ? "text-black text-opacity-50" : " text-black"} rounded-md`}><span className='text-lg font-bold block'>Due Date</span> {formatDateToIndianFormat(task.duedate)}</p>
                                            <p className={` py-2 px-1 ${taskmatch.includes(task._id) ? "text-black text-opacity-50" : " text-black"} rounded-md`}><span className='text-lg font-bold block'>Start Date</span> {formatDateToIndianFormat(task.startdate)}</p>
                                        </div>
                                    </div>

                                </>

                            }


                        </>
                    ))

                }
                {

                    CheckAnswer?.map((item2: any, index: any) => (

                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-500">
                            <div className="mb-4 overflow-hidden">
                                <h2 className="text-lg font-bold text-blue-600 ">Questions</h2>
                                <p>{item2?.taskid?.title}</p>
                            </div>

                            <div className="mb- overflow-hidden">
                                <h2 className="text-lg font-bold text-blue-600">Answer</h2>
                                <div className='w-full '>
                                    <div className='w-full h-full' dangerouslySetInnerHTML={{ __html: item2?.answer }} />
                                </div>
                            </div>

                            <div className="mb-4">
                                <h2 className="text-lg font-bold text-blue-600">Grad</h2>
                                <p>{ManageGrade(item2?.grad)}</p>
                            </div>

                            <div className="mb-4">
                                <h2 className="text-lg font-bold text-green-600">Start Date</h2>
                                <p>{formatDateToIndianFormat2(item2?.taskid?.startdate)}</p>
                            </div>

                            <div className="mb-4">
                                <h2 className="text-xl font-bold text-red-600">End Date</h2>
                                <p>{formatDateToIndianFormat2(item2?.taskid?.duedate)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>




    );
};





export default TaskCard;
