import type { FC } from 'react';

interface AdmissionEnquiryProps {}

const AdmissionEnquiry: FC<AdmissionEnquiryProps> = () => {
    return (
        <>
            <div className=' bg-green-600 p-4 rounded-lg'>
                <h1 className='text-2xl font-bold text-white'>Admission Enquiry Form</h1>
                <p className='text-white'>Click Here to Fill out the Admission Enquiry Form</p>
            </div>
        </>
    );
}

export default AdmissionEnquiry;
