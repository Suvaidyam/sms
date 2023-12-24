import React, { FC, useEffect, useState } from 'react';
import Http from '../../Services/Http';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import YourSchooldemo from './yourschooldemo';
import { FaSchool } from "react-icons/fa";

interface YourSchoolsProps { }

const YourSchools: FC<YourSchoolsProps> = () => {
  const navigate = useNavigate();
  const user: any = sessionStorage.getItem('user');
  const finalResult: any = JSON.parse(user);
  console.log(finalResult);

  const [allSchools, setallSchools] = useState<any[] | null>(null);
  const { OutletMyschool, setOutletMyschool } = useDataContext();
  console.log(allSchools);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res: any = await Http({
          url: '/school/getschool',
          method: 'get',
          data: { school: finalResult.role === 'director' ? '' : finalResult.school },
        });
        setallSchools(res.data.schools);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const schoolHandler = (school: any) => () => {
    setOutletMyschool('hidden');
    navigate('/home/schoolpage/myschool');
    console.log(school);
    localStorage.setItem('school', JSON.stringify(school));
  };

  return (
    <>
      <div className='w-full bg-white  m-4 rounded-sm border hidden md:block '>
        {allSchools ? (
          <table className="table-auto w-full ">
            <thead className=''>
              <tr className='border-b bg-blue-700 rounded-sm '>
                <th className="px-4 py-2 text-base text-white font-semibold">School Logo</th>
                <th className="px-4 py-2 text-base text-white font-semibold">School Name</th>
                <th className="px-4 py-2 text-base text-white font-semibold">School Code</th>
                <th className="px-4 py-2 text-base text-white font-semibold">Founding Year</th>
                <th className="px-4 py-2 text-base text-white font-semibold">Address</th>
              </tr>
            </thead>
            <tbody>
              {allSchools.map((school, index) => (
                <tr key={index} onClick={schoolHandler(school)} className="cursor-pointer hover:bg-[#f1f5f9] hover:rounded-md border-b">
                  {
                    school.logo ?
                      <div className='text-blue-700 flex justify-center mt-2 w-8 h-8 hover:border rounded-full iconbg mx-auto mb-1  '>
                        <img src={`http://localhost:3000/${school.logo}`} alt='school' className='w-full h-ful rounded-full' />
                      </div> :
                      <div className='text-blue-700 flex justify-center mt-2 w-8 h-8 pt-1 hover:border rounded-full iconbg mx-auto mb-1 '>
                        <FaSchool size={20} />
                      </div>
                  }
                  <td className=" px-4 py-2 my-2">{school.schoolname}</td>
                  <td className=" px-4 py-2 my-2">{school.schoolcode}</td>
                  <td className=" px-4 py-2 my-2">{school.foundingyear}</td>
                  <td className=" px-4 py-2 my-2">{school.location}</td>
                </tr>
              ))}
            </tbody>

          </table>


        ) : (
          <YourSchooldemo />
        )}
       

      </div>
      <div className='w-full md:hidden bg-white shadow-md p-4 rounded-sm border'>
        {
          allSchools?.map((school, index) => (

            <tr key={index} className='flex border  mb-2'>
              <div className='w-[30%] bg-blue-700'>
                <th className="px-4 block py-2 text-base text-white font-semibold h-14">School Logo</th>
                <th className="px-4 block py-2 text-base text-white font-semibold h-14">School Name</th>
                <th className="px-4 block py-2 text-base text-white font-semibold h-14">School Code</th>
                <th className="px-4 block py-2 text-base text-white font-semibold h-14">Founding Year</th>
                <th className="px-4 block py-2 text-base text-white font-semibold h-18">Address</th>
              </div>
              <div className='w-[70%] pt-3'>
                <td className=' block h-10 '>
                  {
                    school.logo ?
                      <div className='text-blue-700 flex justify-center mt-2 w-8 h-8  hover:border rounded-full iconbg mx-auto mb-1  '>
                        <img src={`http://localhost:3000/${school.logo}`} alt='school' className='w-full h-ful rounded-full' />
                      </div> :
                      <div className='text-blue-700 flex justify-center mt-2 w-8 h-8 pt-1 hover:border rounded-full iconbg mx-auto mb-1 '>
                        <FaSchool size={20} />
                      </div>
                  }
                </td>
                <td className="block px-4 py-2 h-14">{school.schoolname}</td>
                <td className="block px-4 py-2 h-14">{school.schoolcode}</td>
                <td className="block px-4 py-2 h-14">{school.foundingyear}</td>
                <td className="block px-4 py-2 h-18">{school.location}</td>
              </div>
            </tr>
          ))
        }

      </div>
    </>
  );
};

export default YourSchools;
