import React, { FC, useState,useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Http from '../../Services/Http';

interface SchoolRegisterProps {}

const validationSchema = Yup.object({
  schoolname: Yup.string().required('School Name is required'),
  schoolcode: Yup.string().required('School Code is required'),
  foundingyear: Yup.date().required('Founding Year is required'), 
  location: Yup.string().required('Address is required'),
});

const SchoolRegister: FC<SchoolRegisterProps> = () => {
  const [image,setImage] = useState<File|null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null); 

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (values: any, { setSubmitting ,resetForm }: any) => {
    try {
      const formData = new FormData();
      formData.append('schoolname', values.schoolname);
      formData.append('schoolcode', values.schoolcode);
      formData.append('foundingyear', values.foundingyear);
      formData.append('location', values.location);
      formData.append('image', image ? image :'');
      let res = await Http({
        url: '/school/createschool',
        method: 'post',
        data:formData
      });
      if (image) {
        setImagePreview(URL.createObjectURL(image));
      }
      resetForm();
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  

 
    return (
        <>
       <section className="w-4/5 mx-auto bg-white rounded-lg shadow mt-5">
        <div className="w-full p-4   ">
          <h2 className="mb-4 text-xl text-center font-bold text-gray-900">
            Register a new school
          </h2>
          <Formik
            initialValues={{
              schoolname: '',
              schoolcode: '',
              affliated: '',
              foundingyear: '',
              location: '',
              logo: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
           <Form >

                    <div className='flex'>
                      <div className="w-[30%] ">
                            <div className='w-4/5 mt-5'>
                                { imagePreview ? (
                                      
                                      <img src={imagePreview || ''} alt='' className='w-full h-full' />
                                ):(
                                  <div className='w-full h-28 bg-slate-200 rou'></div>
                                )
                                 
                                }
                               
                            </div>
                            <div className='w-4/5 mt-5'>
                                <label
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  htmlFor="multiple_files"
                                >
                                  Upload multiple files
                                </label>
                                <input
                                  type="file"
                                  name="logo"
                                  onChange={handleImageChange}
                                  className='overflow-hidden'
                                />
                                 <p className='text-red-600 text-xs ml-2 pt-1'>
                                    <ErrorMessage name='logo' />
                                 </p>
                            </div>
                        </div>
                        <div className=" w-[70%] grid gap-4 sm:grid-cols-2 sm:gap-6">
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="schoolname"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              School Name
                            </label>
                            <Field
                              type="text"
                              name="schoolname"
                              id="schoolname"
                              className="border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50 active:bg-white  border-gray-200 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Type product name"
                            />
                            <p className='text-red-600 text-xs ml-2 pt-1'>
                              <ErrorMessage name='schoolname' />
                           </p> 
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="brand"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              School Code
                            </label>
                            <Field
                              type="text"
                              name="schoolcode"
                              id="brand"
                              className="border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50 active:bg-white  border-gray-200 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Product brand"
                            />
                            <p className='text-red-600 text-xs ml-2 pt-1'>
                              <ErrorMessage name='schoolcode' />
                            </p>
                          </div>
                          
                          <div>
                            <label
                              htmlFor="affliated"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Affliated
                            </label>
                            <Field
                              id="affliated"
                              name='affliated'
                              className="border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-50 active:bg-white  border-gray-200 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                            >
                              
                              
                            </Field>
                            <p className='text-red-600 text-xs ml-2 pt-1'>
                            <ErrorMessage name='affliated' />
                            </p>
                          </div>
                          <div className='w-full'>
                            <label
                              htmlFor="foundingyear"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                             Founding Year
                            </label>
                            <Field
                              type="date"
                              name="foundingyear"
                              id="foundingyear"
                              className="border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50 active:bg-white  border-gray-200 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                            />
                            <p className='text-red-600 text-xs ml-2 pt-1'>
                                <ErrorMessage name='foundingyear' />
                            </p>
                          </div>
                          
                          <div className="w-full ">
                            <label
                              htmlFor="description"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                             Address
                            </label>
                            <Field
                              id="description"
                              name='location'
                              rows={8}
                              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-50 active:bg-white  border-gray-200 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Your School Address here"
                              defaultValue={""}
                            />
                            <p className='text-red-600 text-xs ml-2 pt-1'>
                                <ErrorMessage name='location'  />
                            </p>
                           
                          </div>
                          <div className='flex relative justify-center'>
                                <button
                                    type="submit"
                                    className=" text-white absolute top-10 bg-blue-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                
              </Form>
              </Formik>
        </div>
      </section>


        </>
    );
}

export default SchoolRegister;
