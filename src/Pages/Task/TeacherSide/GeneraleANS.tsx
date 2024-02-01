import { useEffect, type FC, useState } from 'react';
import Http from '../../../Services/Http';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import RangeSlider from './RangeSlider';
import { useDataContext } from '../../../Context/DataContext';
import { FaCheckCircle } from 'react-icons/fa';


interface GeneraleANSProps { }

const GeneraleANS: FC<GeneraleANSProps> = () => {
    const [studentData, setstudentData] = useState([])
    const mytaskidString = sessionStorage.getItem('Task');
    const mytaskid = mytaskidString ? JSON.parse(mytaskidString) : null;

    const [gradToggle, setGradToggle] = useState<number | null>(null)
    const { selectedValue } = useDataContext();
    const [TaskReplyID, setTaskReplyID] = useState('');
    const { setTaskCardHideT } = useDataContext();


    console.log(TaskReplyID);

    const GradSubmitHandler = async () => {
        try {
            let res = await Http({
                url: `/task/updatereplytask`,
                method: 'patch',
                data: { grad: selectedValue, _id: TaskReplyID }
            });
            if (res?.data?.message) {
                setTaskCardHideT(false)
            }
            console.log();
        } catch (error) {
            console.log(error);

        }

    }


    const formatDateToIndianFormat = (dateString: any) => {
        const options: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const indianDateFormat = new Date(dateString).toLocaleDateString('en-IN', options);
        return indianDateFormat;
    };
    useEffect(() => {
        const feachData2 = async () => {
            try {
                const taskid = mytaskid?._id;
                const subject = mytaskid?.mytaskid;

                let res = await Http({
                    url: '/task/getreplytask',
                    method: 'get',
                    data: {}
                });
                const data = res.data.Task;
                const StudentData = data.filter((item: any) => item?.taskid?._id === taskid)
                setstudentData(StudentData);


            } catch (error) {
            }
        }

        feachData2()

    }, [])
    const GradHandler = (index: any) => {
        setGradToggle((prevToggle) => (prevToggle === index ? null : index));

    }

    return (
        <>

            <div className='w-full bg-white rounded-md shadow-sm my-5'>
                <div className='w-full md:flex p-6 border-b-4 border-blue-700 shadow-sm'>
                    <div className='w-full md:w-[70%]'>
                        <h1 className='w-full'>
                            <label className=' text-blue-700 text-xl font-semibold'>Question: </label>
                            <input
                                value={mytaskid?.title}
                                type='text'
                                className='w-full text-lg font-semibold outline-none break-all'
                            />
                        </h1>
                        <p className='mt-2'>
                            <label className='text-xl text-blue-700 font-semibold break-all'> Discription: </label>
                            <textarea

                                value={mytaskid?.description}
                                className='w-full outline-none pr-2'
                            />
                        </p>
                    </div>
                    <div className='w-full md:w-[30%]'>

                        <div>
                            <span className="w-full py-1 px-2 inline-flex items-center gap-x-1 text-base mt-3 font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                <svg className="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                Start Date :{formatDateToIndianFormat(mytaskid?.startdate)}
                            </span>
                        </div>
                        <div>
                            <span className="w-full py-1 px-1.5 inline-flex items-center gap-x-1 text-base mt-3 font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                                <svg className="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                Due Date :{formatDateToIndianFormat(mytaskid?.duedate)}
                            </span>
                        </div>
                        {/* <div>
                            <input
                                type='date'
                                className="w-full py-1 px-2 inline-flex items-center gap-x-1 text-base mt-3 font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
                                defaultValue={formatDateToIndianFormat(mytaskid?.startdate)}
                            />
                        </div>
                        <div>
                            <input
                                type='date'
                                className="w-full py-1 px-1.5 inline-flex items-center gap-x-1 text-base mt-3 font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500"
                                defaultValue={formatDateToIndianFormat(mytaskid?.duedate)}
                            />
                        </div> */}
                        <div>
                            <h1 className=" mt-5 text-lg font-semibold text-center">
                                Class : {mytaskid?.className}
                            </h1>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full mt-8'>
            { studentData && studentData.length > 0 ? 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto '>
               
                    {
                    
                        
                    studentData?.map((student: any, index: any) => (
                        <div key={index} className='border-b  bg-white overflow-hidden  rounded-lg shadow-md'>
                            <div className='  border-b-4 border-blue-600'>
                                <div className='p-4 w-full h-[100px] flex justify-between overflow-hidden' >
                                    <div className='w-[32%]  '>
                                        <h1><span className='font-bold text-xl'>Name: </span>{student?.studentprofileid?.studentname?.charAt(0).toUpperCase() + student?.studentprofileid?.studentname?.slice(1)}</h1>
                                        <h1 className='pt-3'><span className='font-bold text-xl'>Gender: </span>{student?.studentprofileid?.gender}</h1>
                                    </div>
                                    <div className='w-[32%] '>
                                        <div className=''><span className='font-bold text-xl'>Class: </span>{student?.studentprofileid?.classname}th</div>
                                        <div className=' pt-3'><span className='font-bold text-xl'>Studentid: </span>{student?.studentprofileid?.studentid}</div>
                                    </div>
                                    <div className='w-[32%]  '>
                                        <img
                                            src={`http://localhost:2000/${student?.studentprofileid?.image}`}
                                            alt={`Student ${student?.studentprofileid?.studentname}`}
                                            className='w-16 h-16 bg-slate-300 rounded-full'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='w-full flex' >
                                    <div className='w-[90%] px-4 py-2'>
                                        <h1 className='font-semibold text-xl pb-2'>Answer</h1>
                                        <div className='' dangerouslySetInnerHTML={{ __html: student?.answer }} />
                                    </div>
                                    <div className='w-[10%] py-5'>
                                        <h1 className='w-full grid place-items-center '>
                                            {/* <span className='bg-blue-600 p-2 text-white text-base rounded-sm '>Grad</span> */}
                                            <span className='text-blue-600 px-2'>
                                                {
                                                    student?.grad ? (
                                                        <div>
                                                            <FaCheckCircle size={25} />
                                                            <span>{student?.grad}</span>
                                                        </div>
                                                    ) : (

                                                        <div onClick={() => GradHandler(index)} className='cursor-pointer'>
                                                            <IoMdArrowDropdownCircle size={25} />
                                                        </div>
                                                    )}
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    {gradToggle === index ? (
                                        <div className='flex justify-between'>
                                            <div className='w-[80%]'>
                                                <RangeSlider />
                                            </div>
                                            <div className='w-[15%]'>
                                                <button
                                                    onClick={() => {
                                                        GradSubmitHandler();
                                                        setTaskReplyID(student?._id);
                                                    }}
                                                    className='bg-blue-600 px-2 py-1 rounded-sm text-white hover:bg-blue-800 hover:rounded-md'
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    ) : null}


                                </div>
                            </div>
                        </div>
                    ))
                
                }
                </div>

                :<p className='text-center text-3xl font-semibold text-gray-800'>NO ANY ANSWER </p>
            }
            </div>

        </>
    );
}

export default GeneraleANS;
