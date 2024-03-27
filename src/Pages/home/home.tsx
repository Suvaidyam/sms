import type { FC } from 'react';
import ImageSlide from './ImageSlider/ImageSlide';
import Navbar from './Navbar';
import About from './About/About';
import AdmissionEnquiry from './AdmissionEnquiry/AdmissionEnquiry';
import AdmissionOpen from './AdmissionOpen/AdmissionOpen';
import SchoolCirculars from './SchoolCirculars/SchoolCirculars';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (
        <div className='w-full overflow-hidden'>

            <Navbar />
            <div className='w-full '>
                <ImageSlide />
            </div>
            <div className='w-[90%] sm:w-[80%] mx-auto'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-6'>
                <AdmissionEnquiry />
                <AdmissionOpen />
                <SchoolCirculars />
            </div>
            <About />
            </div>

        </div>
    );
}

export default Home;
