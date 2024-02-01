import React, { useEffect, useState, FC } from 'react';
import Http from '../../Services/Http';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAddressCard } from 'react-icons/fa6';
import StRegister from '../../Auth/StRegister/StRegiser';
import { useDataContext } from '../../Context/DataContext';
import { FaEdit } from 'react-icons/fa';
import Upstudent from '../../Auth/StRegister/Update/UpStudent'
interface StudentProps {

}
// interface StRegisterProps {
//   studentuserid: string;
// }

const Student: FC<StudentProps> = () => {
  const storedUserString = sessionStorage.getItem('user');
  const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
  const userId = storedUser?.school?._id;
  const studentID = storedUser?.id;
  const userRole = storedUser?.role;
  const userClass = storedUser?.userClass;
  const [studentData, setStudentData] = useState<any>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [noDataMessage, setNoDataMessage] = useState<string>('');
  const { StudentProfile, setStudentProfile, StudentUpdate, setStudentUpdate } = useDataContext();
  const [studentuserid, setstudentuserid] = useState("");

  // const [Student, setStudent] = useState<any>([])
  const [StudentPro, setStudentPro] = useState<any>([])
  const [filteredStudents, setfilteredStudents] = useState([]);

  // console.log(storedUser, userClass);
  console.log(filteredStudents);



  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await Http({
          url: '/auth/seenuser',
          method: 'get',
          data: { role: 'student' },
        });
        const allStudents = res.data.user;
        let filteredStudents = [];  

        if (userRole === 'director') {
          filteredStudents = allStudents;
        } else if (userRole === 'student') {
          filteredStudents = allStudents.filter((student: any) => student._id === studentID);
        } else {
          filteredStudents = allStudents.filter((student: any) => student.school._id === userId);
        }

        setStudentData(filteredStudents);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [userRole, studentID, userId]);

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
  };
  useEffect(() => {
    if (filteredStudents.length === 0) {
      setNoDataMessage('No students found for the selected class.');
    } else {
      setNoDataMessage('');
    }
  }, [filteredStudents])
  

  useEffect(() => {
    
    if (userRole === "principal") {
      const filtered = selectedClass ? studentData.filter((student: any) => student.userClass === selectedClass): studentData;
      setfilteredStudents(filtered)

    } else if (userRole === "teacher" ) {
      const filtered = studentData.filter((student: any) => student.userClass === userClass)
      setfilteredStudents(filtered)
    }
    else {
      const filtered = studentData.filter((student: any) => student.school._id === userId)
      setfilteredStudents(filtered)
    };
    
  }, [selectedClass ,userRole, userClass, studentData,userId])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let res = await Http({
          url: "/student/getstudent",
          method: "get",
          data: {},
        });
        setStudentPro(res.data.students);
      } catch (error) { }
    };
    fetchdata();
  }, []);

  return (
    <>

      <div>
        {
          StudentProfile ? <StRegister studentuserid={studentuserid} /> :
            <>
              {
                userRole === 'principal' ?
                <div className='w-36 '>
                <label
                  htmlFor='countries'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Select a class
                </label>
                <select
                  id='countries'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  onChange={handleClassChange}
                >
                  <option value={''}>All Classes</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='99'>99</option>
                  {/* Add more class options as needed */}
                  </select>
                </div> :
                  ""
               } 

              <div className='container mx-auto overflow-x-auto'>
                {noDataMessage ? (
                  <p className='text-red-500'>{noDataMessage}</p>
                ) : (
                  <table className='w-full min-w-max bg-white shadow-md rounded-lg'>
                    <thead className='bg-gray-800 text-white'>
                      <tr>
                        <th className='py-2 px-4'>Username</th>
                        <th className='py-2 px-4'>Email</th>
                        <th className='py-2 px-4'>Role</th>
                        <th className='py-2 px-4'>Class</th>
                        <th className='py-2 px-4'>Mobile</th>
                        <th className={`py-2 px-4 ${userRole == "principal" && "text-left"}`}>School</th>
                        {
                          userRole == "principal" &&
                          <th className='py-2 px-4 text-'>Profile</th>
                        }

                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student: any) => (
                        <tr key={student._id} className='border-t'>
                          <td className='py-2 text-center px-4'>{student.username}</td>
                          <td className='py-2 text-center px-4'>{student.email}</td>
                          <td className='py-2 text-center px-4'>{student.role}</td>
                          <td className='py-2 text-center px-4'>{student.userClass}</td>
                          <td className='py-2 text-center px-4'>{student.mobile}</td>
                          <td className='py-2 text-right px-4 flex justify-center'>

                            <span>{student.school.schoolname} </span>
                            {
                              userRole == "principal" &&
                              <>

                                <span className='mx-auto flex justify-evenly' >
                                  <BsThreeDotsVertical size={30} className='hover:text-blue-700 cursor-pointer' />
                                </span>
                                <span>
                                  {
                                    StudentPro.some((item: any) => item.studetuserid === student._id) ?
                                      <FaEdit size={25}
                                        onClick={() => {
                                          setStudentUpdate(true);
                                          setstudentuserid(student._id);
                                        }}
                                        className='cursor-pointer hover:text-red-600'
                                      />

                                      :
                                      <FaAddressCard size={30} onClick={() => {
                                        setStudentProfile(true);
                                        setstudentuserid(student._id);
                                      }}
                                        className='cursor-pointer hover:text-red-600' />
                                  }

                                </span>
                              </>
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>

        }

      </div>
      <div >
        {
          StudentUpdate ? <Upstudent studentuserid={studentuserid} /> : ''
        }
      </div>
    </>
  );
};

export default Student;
