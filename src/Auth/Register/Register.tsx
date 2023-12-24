import React, { FC, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Http from '../../Services/Http';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
interface RegisterProps { }

const Register: FC<RegisterProps> = () => {
  const {roleType, SchoolName, setSchoolName } = useDataContext()
  useEffect(() => {
    const fechData = async () => { 
      try { 
        let res: any = await Http({
          url: '/school/getallschool',
          method: 'get',
        });
        // console.log(res.data.schools);
        setSchoolName(res.data.schools)
      } catch (error) {
        console.error(error);

      }
    }
    fechData()

  }, [])



  const validationSchema = Yup.object({
    email: Yup.string().required('School Name is required'),
    password: Yup.string().required('School Code is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .required('Confirm password is required'),
    username: Yup.string().required('Founding Year is required'),
    mobile: Yup.number().required('Address is required'),
    
  });



  const handleSubmit = async (values: any,{resetForm}:any) => {
    const email = values.email;
    const password = values.password;
    const username = values.username;
    const mobile = values.mobile;
    const role = roleType;
    const school = values.school;
// const data = {email,password,username ,mobile ,role ,school}
// console.log(data);

    try {
      let res = await Http({
        url:'/auth/createuser',
        method:'post',
        data:{email,password,username ,mobile ,role ,school},
      });
      console.log(res);
      resetForm()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="  mt-5 md:mt-0">
        <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              username: '',
              mobile: '',
              school: '',

            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full bg-white rounded-lg shadow p-8 md:p-8 dark:border md:mt-0 sm:max-w-md xl:p-8 dark:bg-gray-800 dark:border-gray-700 ">
              <h1 className='text-xl font-bold pb-4 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Registering </h1>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "

                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
                <p className='text-red-600 text-xs ml-2 pt-1'>
                  <ErrorMessage name='email' />
                </p>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "

                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                <p className='text-red-600 text-xs ml-2 pt-1'>
                  <ErrorMessage name='password' />
                </p>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="confirmPassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
                <p className='text-red-600 text-xs ml-2 pt-1'>
                  <ErrorMessage name='confirmPassword' />
                </p>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "

                  />
                  <label
                    htmlFor="username"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your name
                  </label>
                  <p className='text-red-600 text-xs ml-2 pt-1'>
                    <ErrorMessage name='username' />
                  </p>
                </div>
                <div className="relative z-0 w-full mb-5 group">

                  <Field
                    // type='select'
                    as='select'
                    name="school"
                    id="school"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    <option value="" disabled>Select School</option>
                    {SchoolName?.map((schoolname, index) => (
                      <option key={index} value={schoolname._id} className='px-2 py-1'>
                        {schoolname.schoolname}
                      </option>
                    ))}
                  </Field>
                  <label
                    htmlFor="school"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Schools
                  </label>
                  <p className='text-red-600 text-xs ml-2 pt-1'>
                    <ErrorMessage name='role' />
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <Field
                    type="number"
                    min='10'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="mobile"
                    id="mobile"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    

                  />
                  <label
                    htmlFor="mobile"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                  <p className='text-red-600 text-xs ml-2 pt-1'>
                    <ErrorMessage name='mobile' />
                  </p>
                </div>

                
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>

            </Form>
          </Formik>
        </div>
      </section>

    </>
  );
}

export default Register;
