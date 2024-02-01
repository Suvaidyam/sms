import { useEffect, type FC, useState, useRef, useMemo } from 'react';
import { useDataContext } from '../../../Context/DataContext';
import { TbArrowBack } from "react-icons/tb";
import { useNavigate, useParams } from 'react-router-dom';
import Http from '../../../Services/Http';

import JoditEditor from 'jodit-react';

interface TaskPageProps { id: string }

const TaskPage: FC<TaskPageProps> = ({ id }) => {
    const { setTaskCardHide } = useDataContext();
    const [taskPageData, settaskPageData] = useState<any[]>([]);
    const [ReplyAnswer, setReplyAnswer] = useState<string>('');
    const navigate = useNavigate();
    const [taskid, settaskid] = useState(null)
    const user = sessionStorage.getItem('user');
    const userConvert = user ? JSON.parse(user) : null;
    const studentid = userConvert?.id;
    const editor = useRef(null);
    const [StudentProfile, setStudentProfile] = useState<any[]>([])

    const config: any = useMemo(() => {
        return {
            placeholder: 'Start typing...',
        };
    }, []);

    useEffect(() => {
        const feachData = async () => {
            try {
                let res = await Http({
                    url: '/task/gettask',
                    method: 'get',
                    data: { id }
                });
                settaskPageData(res.data.Task)
                settaskid(res.data.Task[0]?._id)
                // console.log(res.data.Task);

            } catch (error) {
            }
        };
        feachData();
        const feachData2 = async () => {
            try {
                let res = await Http({
                    url: '/task/getreplytask',
                    method: 'get',
                    data: { taskid, studentid }
                });
                const studentans = res.data.Task
                setReplyAnswer(res.data.Task.answer);
            } catch (error) {
            }
        }
        // setTimeout(()=>{
        feachData2()
        // },5000)
        // console.log(taskid);
    }, [taskid, studentid, id])

    const formatDateToIndianFormat = (formatDate: any) => {
        const Alloption: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const InDate = new Date(formatDate).toLocaleDateString('en-In', Alloption);
        return InDate
    };
    useEffect(() => {
        const fatchData = async () => {
            try {
                let res = await Http({
                    url: '/student/getstudent',
                    method: 'get',
                    data: {}
                });
                const data = res.data.students;
                const StudentProfileId = data.filter((item:any)=> item.studetuserid === studentid);                
                setStudentProfile(StudentProfileId[0]?._id);
                // console.log(StudentProfile,studentid);
                

            } catch (error) {
                console.log(error);
                
            }
        }
        fatchData()
    }, [])
    

    const ReplyAnswerHandler = async () => {

        try {
            if (ReplyAnswer !== '') {
                const taskid = taskPageData[0]?._id

                let res = await Http({
                    url: '/task/createreplytask',
                    method: 'post',
                    data: { taskid, answer:ReplyAnswer, studentid , studentprofileid:StudentProfile }
                });

                if (res.data.message === "Task Reply successfully" ) {
                    setTaskCardHide(false)
                    
                }
            }
        } catch (error) {
            console.log('Update Reply Fail');

        }
    };
    return (
        <>
            <div className='flex ' >
                <div onClick={() => setTaskCardHide(false)} className='flex'>

                    <TbArrowBack size={30} />
                    <button className='text-base font-light'>Back to Task </button>
                </div>
            </div>
            {
                
                taskPageData?.map((Task, index) => (

                    <div className='w-full bg-white rounded-md shadow-sm my-5' key={index}>
                        <div className='w-full p-6 border-b-2 border-blue-700 shadow-sm'>
                            <h1 className='w-full'>
                                <span className=' text-blue-700 text-xl font-semibold'>Question: </span>
                                <span className='w-full text-lg font-semibold'> {Task.title}</span>

                            </h1>

                            <p className='mt-2'>
                                <span className='text-xl text-blue-700 font-semibold'> Discription: </span>
                                <span>{Task.description}</span>

                            </p>
                        </div>
                        <div className='w-full  md:flex my-5 p-4'>
                            <div className=" w-[75%]">
                                    <JoditEditor
                                        ref={editor}
                                        value={ReplyAnswer}
                                        config={config}
                                        onChange={newContent => setReplyAnswer(newContent)}
                                    />
                            </div>
                            <div className='w-[20%]   px-4'>
                                <div className='w-full  mt-2 '>
                                    <button onClick={ReplyAnswerHandler} type="button" className="  w-full py-3 px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-200 text-blue-800 hover:bg-blue-300 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Submit
                                    </button>
                                </div>
                                <div>
                                    <span className="w-full py-1 px-2 inline-flex items-center gap-x-1 text-base mt-3 font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                        <svg className="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                        Start Date :{formatDateToIndianFormat(Task.startdate)}
                                    </span>
                                </div>
                                <div>
                                    <span className="w-full py-1 px-1.5 inline-flex items-center gap-x-1 text-base mt-3 font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                                        <svg className="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                        Due Date :{formatDateToIndianFormat(Task.duedate)}
                                    </span>
                                </div>

                                <div>
                                    <h1 className=" mt-5 text-lg font-semibold text-center">
                                        Class : {Task.className}
                                    </h1>
                                </div>

                                <div>
                                    <h1 className=" mt-5 text-lg font-semibold text-center">
                                        Teacher  : {Task?.teacherid?.username}
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
}

export default TaskPage;
