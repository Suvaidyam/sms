import React, { FC, useEffect, useState } from 'react';
import Http from '../../Services/Http';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import YourSchooldemo from './yourschooldemo';
import { FaSchool } from "react-icons/fa";
import ImagePopup from './ImagePopup/ImagePopup';


interface YourSchoolsProps { }

const YourSchools: FC<YourSchoolsProps> = () => {
  const navigate = useNavigate();
  const user: any = sessionStorage.getItem('user');
  const finalResult: any = JSON.parse(user);
  const schoolid = finalResult.school?._id;
  const schoolrole = finalResult.role;

  
  const [allSchools, setallSchools] = useState<any[] | null>(null);
  const { OutletMyschool, setOutletMyschool } = useDataContext();
  const [selectedSchool, setSelectedSchool] = useState<any | null>(null);
  const [SchoolImage, setSchoolImage] = useState<any | boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res: any = await Http({
          url: '/school/getschool',
          method: 'get',
          data: { school: schoolrole === 'director'  ? schoolrole  : schoolid },
        });
        setallSchools(res.data.schools);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // const schoolHandler = (school: any) => () => {
  //   setOutletMyschool('hidden');
  //   navigate('/home/schoolpage/myschool');
  //   console.log(school);
  //   localStorage.setItem('school', JSON.stringify(school));
  // };
  const formatIndianDate = (dateString:any) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
  
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedDay}-${formattedMonth}-${year}`;
  };
  
   const onClosePopup = () => {
    setSchoolImage((dev:any)=>!dev)
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
  {allSchools ? (
    allSchools.map((school, index) => (
      <div key={index} className="bg-white p-4 rounded-sm border hover:shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="text-blue-700">
            {school.logo ? (
              <img
                onClick={() => {
                  onClosePopup();
                  setSelectedSchool(school.logo);
                }}
                src={`http://localhost:3000/${school.logo}`}
                alt="school"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            ) : (
              <FaSchool size={20} />
            )}
          </div>
          <div className="text-right text-xs text-gray-500">
            Founding Year: {formatIndianDate(school.foundingyear)}
          </div>
        </div>
        <div className="mb-2 font-semibold">{school.schoolname}</div>
        <div className="text-gray-600 mb-2">School Code: {school.schoolcode}</div>
        <div className="text-gray-600 mb-2">Address: {school.location}</div>
        {/* Add more details if needed */}
      </div>
    ))
  ) : (
    <YourSchooldemo />
  )}
</div>

      {SchoolImage && (
        <ImagePopup
          imageUrl={`http://localhost:3000/${selectedSchool}`}
          onClose={onClosePopup}
        />
      )}
    </>
  );
};

export default YourSchools;
