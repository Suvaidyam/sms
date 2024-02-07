import { useState, type FC, SetStateAction } from 'react'; // Import SetStateAction
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Http from '../../Services/Http';
import Image from './Image'
import { FaCirclePlus } from "react-icons/fa6";

interface ImageSliderProps { }

const ImageSlider: FC<ImageSliderProps> = () => {
    const [Toggle, setToggle] = useState<boolean>(false)
    const [Image1, setImage1] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const initialImageForm = {
        title: "",
        description: ""
    };

    const SignupSchema = Yup.object().shape({
        title: Yup.string(),
        description: Yup.string()
    });
    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage1(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };
    const SubmitEventHandler = async (values: any, resetForm: any) => {

        try {
            const fromData = new FormData();
            fromData.append("title", values?.title);
            fromData.append("description", values?.description)
            fromData.append("image", Image1)

            let res = await Http({
                url: `/image/createimage`,
                method: "post",
                data: fromData
            });
            console.log(res.data.message, res.data.error);
            if (res.data.message === "saved_200") {
                resetForm()
            }
        } catch (error) {
            console.log(error);

        }

    };

    const imageHndler = () =>{
        setToggle((t)=>!t)
    }

    return (
        <>

            <div className='flex justify-end w-full mr-5 '>
                <FaCirclePlus onClick={imageHndler} size={40} className='text-blue-600 cursor-pointer bg-white rounded-full' />
            </div>

            {
                Toggle && 

                <Formik
                initialValues={initialImageForm}
                validationSchema={SignupSchema}
                onSubmit={SubmitEventHandler}
            >
                <Form>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='bg-white p-4 rounded-md border shadow-lg' >
                            <div className='bg-white '>
                                <label htmlFor='title'>Title</label>
                                <Field
                                    type='text'
                                    name="title"
                                    id='title'
                                    className='py-2 px-4  w-full rounded-md border shadow-md border-blue-500'
                                />
                                <ErrorMessage name="title" />
                            </div>
                            <div className='bg-white '>
                                <label htmlFor='description'>Description</label>
                                <Field
                                    as='textarea'
                                    name="description"
                                    id='description'
                                    className='py-2 px-4  w-full rounded-md border shadow-md border-blue-500'
                                />
                                <ErrorMessage name="description" />
                            </div>
                            <div className='bg-white h-40 rounded-md border shadow-lg mt-5'>
                                <div className='bg-gray-300'>
                                    {/* Display the selected image */}
                                    {imagePreview && <img src={imagePreview} alt="Selected" className="mt-2 mx-auto h-40 rounded-md" />}
                                </div>
                            </div>
                            <div className="py-1 border border-gray-300 rounded-md">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-blue-600 py-2 px-4 rounded-md text-base font-semibold text-white'>Submit</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            }

            <Image />
        </>
    );
};

export default ImageSlider;
