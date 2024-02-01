import React, { useEffect, useState } from 'react';
import Http from '../../../Services/Http';
import { MdEditSquare } from "react-icons/md";
import { useDataContext } from '../../../Context/DataContext';
import GeneraleANS from './GeneraleANS';


interface TeacherSideProps {
  Subject: string;
}

const TeacherSide: React.FC<TeacherSideProps> = ({ Subject }) => {
  const user = sessionStorage.getItem('user');
  const userConvert = user ? JSON.parse(user) : null;
  const schoolid = userConvert?.school._id;
  const userClass = userConvert?.userClass;
  const teacherid = userConvert?.id
  
  const [taskPageData, settaskPageData] = useState<any[]>([])
  const [ReplyAnswer, setReplyAnswer] = useState<any[]>([])

  const {TaskCardHideT, setTaskCardHideT} = useDataContext()

  const TechetTaskHAndler = (taskData:any)=>{
    const task = taskData;
    sessionStorage.setItem('Task', JSON.stringify(task));
    setTaskCardHideT(true)
  }

  useEffect(() => {
    const feachData = async () => {
      try {
        const subject = Subject
        let res = await Http({
          url: '/task/gettask',
          method: 'get',
          data: { userClass, teacherid, subject }
        });
        settaskPageData(res.data.Task)
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
          data: {}
        });

        setReplyAnswer(res.data.Task);

      } catch (error) {

      }
    }
    feachData2()

  }, [Subject, userClass, schoolid])

  const formatDateToIndianFormat = (dateString: any) => {
    const options: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const indianDateFormat = new Date(dateString).toLocaleDateString('en-IN', options);
    return indianDateFormat;
};
  return (
    <>
      {TaskCardHideT ? (
        <GeneraleANS />
      ) : (
        <div className="container mx-auto my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {taskPageData?.map((taskData, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-lg p-4 cursor-pointer border-t-4 border-blue-600"
                onClick={() => TechetTaskHAndler(taskData)}
              >
                <div className='flex justify-between mb-2'>
                <h2 className="text-xl font-semibold mb-2 break-all">{taskData?.title}</h2>
                <h2 className='bg-slate-950 text-white px-4 py-2 rounded-full '>{taskData?.className}</h2>
                </div>
                {/* <p className="text-gray-700 mb-4">{taskData.description.split(10)}</p> */}
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Post Date: {formatDateToIndianFormat(taskData?.startdate)}</p>
                  <p className="text-sm text-gray-600">Due Date: {formatDateToIndianFormat(taskData?.duedate)}</p>
                </div>
                {/* <p className="text-sm text-gray-600">Class: {taskData.className}</p> */}
                
              </div>
            ))}
          </div>
        </div>
      )}
    </>

  );
};

export default TeacherSide;
