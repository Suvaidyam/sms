import { FC ,useEffect,useState} from 'react';
import Http from '../../Services/Http';
interface YourSchoolsProps {}
    
    
const YourSchools: FC<YourSchoolsProps> = () => {
    const [allSchools, setallSchools] = useState<any[] | null>(null);
    console.log(allSchools);
    
    useEffect(() => {
        const fetchData = async ()=>{
            try {
                let res :any = await Http({
                    url: '/school/getallschool',
                    method: 'get',
                });
            setallSchools(res.data.schools);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
      
    }, [])
    return (
        <>
      {allSchools && Array.isArray(allSchools) && allSchools.length > 0 ? (
            allSchools.map((school, index) => (
                <div key={index} className='md:flex w-4/5 mx-auto p-4 border border-[#dda758] mt-5 rounded-lg bg-[#ffe6c0]'>
                    <div className='w-full md:w-[25%] h-20 py-2'>
                        <img src={school.logo} alt='school' className='w-full h-full' />
                    </div>
                    <div className='w-full md:w-[75%]'>
                        <div className='w-full md:flex  '>
                            <div className='w-full md:w-[25%] border-2 border-[#dda758]'>
                                <h1 className='text-xl  text-center  bg-[#dda758] py-2 '>School Name:</h1>
                                <h1 className=' text-xl p-2 break-all '>
                                    {school.schoolname}
                                </h1>
                            </div>
                            <div className='w-full md:w-[25%] border-2 border-[#dda758]'>
                                <h1 className='text-xl  text-center  bg-[#dda758] py-2 '>School Code:</h1>
                                <h1 className=' text-xl p-2 break-all '>
                                    {school.schoolcode}
                                </h1>
                            </div>
                            <div className='w-full md:w-[25%] border-2 border-[#dda758]'>
                                <h1 className='text-xl  text-center  bg-[#dda758] py-2 '>Founding Year:</h1>
                                <h1 className=' text-xl p-2 break-all '>
                                    {school.foundingyear}
                                </h1>
                            </div>
                            <div className='w-full md:w-[25%] border-2 border-[#dda758]'>
                                <h1 className='text-xl   text-center bg-[#dda758] py-2 '>Address:</h1>
                                <h1 className=' text-xl p-2 break-all '>
                                    {school.location}
                                </h1>
                            </div>
                            
                            
                            
                            
                        </div>

                    </div>
                </div>
            ))
        ) : (
            <p>Loading...</p>
        )}
    </>
    );
}

export default YourSchools;
