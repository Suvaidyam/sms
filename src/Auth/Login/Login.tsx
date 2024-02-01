import { FC,useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Http from '../../Services/Http';
// import Loginlogo from '../../Assets/Login/Login_logo.png'
import { useNavigate } from 'react-router-dom';
import {useDataContext } from '../../Context/DataContext';
import Fail from '../../Pages/Massage/Fail';
import Logout from '../../Pages/Massage/Logout';

interface LoginProps { }

const Login: FC<LoginProps> = () => { 

  const navigate = useNavigate()
  const { setloginMassage ,massegeLogout} = useDataContext()
  const [loginFail, setloginFail] = useState<boolean>(false)
  
  const validationSchema = Yup.object({
    email: Yup.string().required('School Name is required'),
    password: Yup.string().required('School Code is required'),
  })
  const handleSubmit = async (values: any, { resetForm }: any) => {
    const email = values.email;
    const password = values.password;
    const post = async () => {
      try {
        let res = await Http({ 
          url: "/auth/loginuser",
          method: 'post',
          data: { email, password }
        })

       
          
        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          const userString = JSON.stringify(res.data.user);
          sessionStorage.setItem("user", userString)
          navigate('/home/dashboard');
          setloginMassage(res.data.token)
          setTimeout(()=>{
            setloginMassage(null)
          },5000)
        };
        
       
      } catch (error:any) {
        // console.log(error)
        const errorMessage  = error?.response?.data?.message || 'Unknown error';
  
        if (errorMessage == "Password Incorrect" || errorMessage == "Incorrect Email" ) {
          setloginFail(true)
          setTimeout(()=>{ 
            setloginFail(false)
          },5000)
        }
      }
    };
    post()
  }

  return (
    <>
      <section className="bg-gray-200 dark:bg-gray-900 relative">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div
            // href="#"
            className="flex mb-2 items-center text-3xl font-bold leading-tight tracking-tight text-blue-700 uppercase"
          >
            {/* <img
              className="w-8 h-8 mr-2"
              src={Loginlogo}
              alt="logo"
            /> */}
            Suvaidyam
          </div>
          <div className="w-[360px] bg-white rounded-lg  shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 className="text-3xl font-bold leading-tight  tracking-tight text-blue-700 uppercase">
                Login
              </h1>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-extralight text-base  text-gray-900"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className=" border-b focus:border-b-2 focus:border-blue-700 outline-none py-1 text-base font-medium border-gray-900 text-gray-900  placeholder:font-extralight placeholder:text-base  block w-full  "
                      placeholder="Name@Email.com"

                    />
                    <p className='h-10 font-extralight text-sm text-[#ed2553]  pt-2'>
                      <ErrorMessage name='email' />
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block font-extralight text-base  text-gray-900 "
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="border-b focus:border-b-2 focus:border-blue-700 outline-none py-1 text-base font-medium border-gray-900 text-gray-900  placeholder:font-extralight  block w-full  "

                    />
                    <p className='h-10 font-extralight text-sm text-[#ed2553]  py-2'>
                      <ErrorMessage name='password' />
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <button
                    type="submit"
                    className="text-white bg-blue-700  leading-tight tracking-tight  uppercase mx-auto focus:ring-4 focus:outline-none  font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                  </div>
                  <div className='flex justify-end'>

                    <div
                      // href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </div>
                  </div>

                </Form>
              </Formik>
            </div>
          </div> 
        </div>
                {
                  loginFail ?  <Fail/> : null
                };
                {
                  massegeLogout ? <Logout/> :null
                }
      </section>
               
    </>
  );
}

export default Login;