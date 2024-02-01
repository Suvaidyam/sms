import React, { FC, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import Http from '../../../Services/Http';

interface GeneraleTaskProps {
    onClose1: () => void;
    Subject: string;
}

const TeacherTask: FC<GeneraleTaskProps> = ({ onClose1, Subject }) => {

    const user = sessionStorage.getItem('user');
    const userConvert = user ? JSON.parse(user) : null;
    const userSchollId = userConvert.school._id;
    const teacherid = userConvert?.id;

    console.log(teacherid, userConvert);

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Title is required'),
        startDate: Yup.date().required('Start date is required'),
        dueDate: Yup.date().required('Due date is required'),
        className: Yup.string().required('Class is required'),
    });


    const handleSendTask = async (values: any) => {

        const title = values.title;
        const description = values.description;
        const startdate = values.startDate;
        const duedate = values.dueDate;
        const className = values.className;
        const schoolid = userSchollId;
        const subject = Subject
        try {
            let res = await Http({
                url: '/task/createtask',
                method: 'post',
                data: { title, description, startdate, duedate, className, schoolid, teacherid, subject }
            });
            if (res.data) {
                onClose1()
            }

        } catch (error) {

        }

    };

    return (
        <>
            <div className='w-full  bg-black bg-opacity-50 inset-0 flex items-center justify-center fixed'>

                <div className="w-[90%] overflow-y-auto md:max-w-lg mx-auto p-2 md:p-8 bg-white shadow-lg rounded-md relative">
                    <button onClick={onClose1} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                        <FaTimes size={20} />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">Send Task to Students</h2>
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                            startDate: '',
                            dueDate: '',
                            className: '',

                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSendTask}

                    >
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                                    Task Title
                                </label>
                                <Field
                                    type="text"
                                    id="title"
                                    name="title"
                                    // value={taskDetails.title}
                                    // onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                                <p className='text-red-600 text-xs ml-2 pt-1'>
                                    <ErrorMessage name='title' />
                                </p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                                    Task Description
                                </label>
                                <Field
                                    as='textarea'
                                    id="description"
                                    name="description"
                                    // value={taskDetails.description}
                                    // onChange={handleTextareaChange}
                                    className="mt-1 p-2 w-full border rounded-md h-52"
                                ></Field>
                                <p className='text-red-600 text-xs ml-2 pt-1'>
                                    <ErrorMessage name='description' />
                                </p>
                            </div>
                            <div className="md:flex mb-4">
                                <div className="mr-2 w-1/2">
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">
                                        Start Date
                                    </label>
                                    <Field
                                        // as ="date"
                                        type='date'
                                        id="startDate"
                                        name="startDate"
                                        // value={taskDetails.startDate}
                                        // onChange={handleDateChange}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    <p className='text-red-600 text-xs ml-2 pt-1'>
                                        <ErrorMessage name='startDate' />
                                    </p>
                                </div>
                                <div className="ml-2 w-1/2">
                                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-600">
                                        Due Date
                                    </label>
                                    <Field
                                        type='date'
                                        id="dueDate"
                                        name="dueDate"
                                        // value={taskDetails.dueDate}
                                        // onChange={handleDateChange}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    <p className='text-red-600 text-xs ml-2 pt-1'>
                                        <ErrorMessage name='dueDate' />
                                    </p>
                                </div>
                                <div className="mb-4 ml-4">
                                    <label htmlFor="class" className="block text-sm font-medium mt-1 text-gray-600">
                                        Class
                                    </label>
                                    <Field
                                        as='select'
                                        id="class"
                                        name="className"
                                        // value={taskDetails.class}
                                        // onChange={handleClassChange}
                                        className="mt-1 p-2 w-full  rounded-md border-none outline-none"
                                    >
                                        <option value="" disabled>
                                            Select a class
                                        </option>
                                        {/* {classOptions.map((option, index) => ( */}
                                        <option value={'1'} >1</option>
                                        <option value={'2'} >2</option>
                                        <option value={'3'} >3</option>
                                        <option value={'4'} >4</option>
                                        <option value={'5'} >5</option>
                                        <option value={'6'} >6</option>
                                        <option value={'7'} >7</option>
                                        <option value={'8'} >8</option>
                                        <option value={'9'} >9</option>
                                        <option value={'10'} >10</option>
                                        {/* ))} */}
                                    </Field>
                                    <p className='text-red-600 text-xs ml-2 pt-1'>
                                        <ErrorMessage name='className' />
                                    </p>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  "
                            >
                                <h1 className='mx-auto text-center'>Send Task</h1>
                            </button>
                        </Form>
                    </Formik>
                </div>

            </div>
        </>
    );
};

export default TeacherTask;
