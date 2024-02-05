import { ErrorMessage, Field, Formik, Form } from "formik";
import { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import { FaWindowClose } from "react-icons/fa";
import { useDataContext } from "../../../Context/DataContext";
import Http from "../../../Services/Http";

interface UpStudentProps {
    studentuserid: string;
}

interface UserData {
    school?: {
        schoolname: string;
    };
    username: string;
    _id: any;
}
const UpStudent: FC<UpStudentProps> = ({ studentuserid }) => {
    const [userData, setuserData] = useState<UserData[]>([]);
    const { StudentUpdate, setStudentUpdate } = useDataContext();
    const [Image, setImage] = useState<File | null>(null);
    const [studentName, setStudentName] = useState<string>('');
    const [initialValues, setInitialValues] = useState<any>(null);
console.log(studentuserid);

    const [PastImage, setPastImage] = useState(null)
    useEffect(() => {
        const fetchdata = async () => {
            try {
                let res = await Http({
                    url: "/student/getstudent",
                    method: "get",
                    data: { studentuserid },
                });
                setPastImage(res.data.oneStudent[0]?.image)
                setInitialValues({
                    studentid: res.data.oneStudent[0]?.studentid ?? "",
                    age: res.data.oneStudent[0]?.age ?? "",
                    studentname: res.data.oneStudent[0].studentname ?? "",
                    gender: res.data.oneStudent[0]?.gender ?? "",
                    dob: res.data.oneStudent[0]?.dob ?? "",
                    address: res.data.oneStudent[0]?.address ?? "",
                    userclass: res.data.oneStudent[0]?.classname ?? "",
                    school: res.data.oneStudent[0]?.school ?? ""
                })
            } catch (error) {
                console.error(error);
            }
        };

        fetchdata();
    }, [studentuserid]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };



    const validationSchema = Yup.object({
        userclass: Yup.number().required("Class is required"),
        studentid: Yup.string().required("Student ID is required"),
        age: Yup.number().required("Age is required"),
        gender: Yup.string().required("Gender is required"),
        dob: Yup.date().required("Date of Birth is required"),
        address: Yup.string().required("Address is required"),
        // image: Yup.string().required("Image is required"),
    });

    const handleSubmit = async (value: any) => {
        // console.log(value);

        const formData = new FormData();
        formData.append("studetuserid",studentuserid);
        formData.append("studentid", value.studentid);
        formData.append("studentname", value.studentname);
        formData.append("age", value.age);
        formData.append("gender", value.gender);
        formData.append("dob", value.dob);
        formData.append("address", value.address);
        formData.append("school", value.school);

        formData.append("classname", value.userclass);
        formData.append("image", Image ? Image : "");

        const fetchData = async () => {
            try {
                let res: any = await Http({
                    url: "/student/updatestudent",
                    method: "patch",
                    data: formData,
                });
                console.log(res.data?.message);
                
                if (res.data.message) {
                    setStudentUpdate(false)
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    };




    return (
        <>
            <div className="w-full fixed inset-0 items-center bg-black bg-opacity-50 ">
                {initialValues &&
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <div className="flex justify-center w-full mt-[10%]">
                            <Form className="w-[80%] md:max-w-6xl bg-white rounded-lg shadow p-8 md:p-8 dark:border md:mt-0  xl:p-8 dark:bg-gray-800 dark:border-gray-700 ">
                                <div className="flex justify-end ">
                                    <div
                                        className="w-10 cursor-pointer"
                                        onClick={() => setStudentUpdate(false)}>
                                        <FaWindowClose size={30} />
                                    </div>
                                </div>
                                <h1 className="text-xl font-bold pb-4 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Update Student Details
                                </h1>

                                <div className="w-full grid md:grid-cols-4 md:gap-6">

                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="number"
                                            name="studentid"
                                            id="studentid"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="studentid"
                                            className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Student ID
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="studentid" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="text"
                                            id="studentname"
                                            name="studentname"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="studentname"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Student Name
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="studentname" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="text"
                                            id="school"
                                            name="school"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="school"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            School
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="school" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="number"
                                            name="age"
                                            id="age"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="age"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Age
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="age" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            as="select"
                                            name="gender"
                                            id="gender"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" ">
                                            <option disabled value="">
                                                Select Gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="thirdgender">Third gender</option>

                                        </Field>
                                        <label
                                            htmlFor="gender"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Gender
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="gender" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="date"
                                            name="dob"
                                            id="dob"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="dob"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Date of Birth
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="dob" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="text"
                                            name="userclass"
                                            id="userclass"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="userclass"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Class
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="userClass" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <Field
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="address"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Address
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="address" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            onChange={handleImageChange}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="image"
                                            className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Image
                                        </label>
                                        <p className="text-red-600 text-xs ml-2 pt-1">
                                            <ErrorMessage name="image" />
                                        </p>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group" >
                                        {/* {selectedImage && ( */}
                                            <div className="relative">
                                                <img
                                                    src={`http://localhost:2000/${Image ? Image : PastImage}`}
                                                    alt="Profile Image"
                                                    className="w-full h-auto rounded"
                                                />
                                            </div>
                                        {/* )} */}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </Formik>}
            </div>
        </>
    );
};

export default UpStudent;
