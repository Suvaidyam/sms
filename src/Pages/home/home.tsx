import type { FC } from 'react';
import ImageSlide from './ImageSlider/ImageSlide';
import Navbar from './Navbar';
import About from './About/About';
import AdmissionEnquiry from './AdmissionEnquiry/AdmissionEnquiry';
import AdmissionOpen from './AdmissionOpen/AdmissionOpen';
import SchoolCirculars from './SchoolCirculars/SchoolCirculars';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <div className=''>

            <Navbar />
            <ImageSlide />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-20 my-10'>
                <AdmissionEnquiry/>
                <AdmissionOpen/>
                <SchoolCirculars/>
            </div>
            <About/>
            
        </div>
    );
}

export default Home;
