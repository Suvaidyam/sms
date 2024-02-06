import type { FC } from 'react';
import { MdKeyboardCommandKey } from "react-icons/md";

interface AboutProps { }

const About: FC<AboutProps> = () => {
    return (
        <>
            <div className="w-full h-full p-8 md:flex bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-3/5 p-4">

                    <h2 className="w-full md:w-[60%] mx-auto text-3xl font-bold mb-2">
                    <MdKeyboardCommandKey className='mb-10'/>

                         vision is to be the pre-eminent centre of learning in the country,  producing future leaders with a global perspective and an Indian ethos.
                    
                    <MdKeyboardCommandKey className='mt-10 mr-12'/>
                    </h2>
                    

                </div>
                <div className="w-full  md:w-2/5 h-96">
                    <img className="object-cover object-center w-full h-full" src={'https://www.thoughtco.com/thmb/qnfOXiVO-cOqvZRby4iv41T3h58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/portrait-of-male-teacher-with-arms-folded-in-school-corridor-480811293-5b15a3d1eb97de0036da52c2.jpg'} alt={"title"} />
                </div>
            </div>
        </>
    );
}

export default About;
