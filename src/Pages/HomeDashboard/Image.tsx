import React, { useEffect, useState } from 'react';
import Http from '../../Services/Http';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MdDelete } from "react-icons/md";
import Template from "./template"
interface ImageProps { }

const Image = () => {
    const [data, setData] = useState<any[]>([]);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [editModes, setEditModes] = useState<boolean[]>([]);
    const [_id, set_id] = useState<string>('')
    const [deleteId, setdeleteId] = useState<string>('')
    console.log(deleteId);

    // useEffect(() => {
    const fetchDataFromServer = async () => {
        try {
            const res = await Http({
                url: '/image/getimage',
                method: 'GET',
                data: {}
            });
            setData(res.data.image);
            // Initialize edit mode state for each item
            setEditModes(res.data.image.map(() => false));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchDataFromServer();


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const toggleEditMode = (index: number) => {
        setEditModes(prevEditModes => {
            const newEditModes = [...prevEditModes];
            newEditModes[index] = !newEditModes[index];
            return newEditModes;
        });
    };



    const SignupSchema = Yup.object().shape({
        title: Yup.string().required('required title'),
        description: Yup.string().required('required description'),
    });

    const SubmitEventHandler = async (values: any, index: number) => {
        console.log("fu", values);

        const formData = new FormData();
        formData.append("title", values?.title);
        formData.append("description", values?.description);
        formData.append("image", imageFile as Blob);
        formData.append("_id", _id)

        try {
            const res = await Http({
                url: '/image/updateimage',
                method: 'patch',
                data: formData
            });
            setData(prevData => {
                const newData = [...prevData];
                newData[index] = res.data.image;
                return newData;
            });
            setEditModes(prevEditModes => {
                const newEditModes = [...prevEditModes];
                newEditModes[index] = false;
                return newEditModes;
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData = async () => {
        try {
            let res = await Http({
                url: `/image/deleteImage`,
                method: "delete",
                data: { id: deleteId }
            })
            if (res.data.message === "deleteSuss_200") {
                fetchDataFromServer()
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return (
        <>
            {
                Array.isArray(data) && data.length === 0 ? (
                    <Template />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
                        {data.map((item, index) => (
                            <Formik
                                key={index}
                                initialValues={{
                                    title: item?.title ? item?.title : "",
                                    description: item?.description ? item?.description : "",
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={(values) => SubmitEventHandler(values, index)}
                            >
                                {({ handleSubmit }) => (
                                    <form
                                        className="bg-white shadow-lg border rounded-md p-4 mb-4"
                                        onClick={() => set_id(item?._id)}
                                        onSubmit={handleSubmit}
                                    >
                                        {editModes[index] ? (
                                            <Field
                                                type="text"
                                                name="title"
                                                className="rounded-md border shadow-md border-blue-500 px-2 py-1 mb-2 block w-full"
                                            />
                                        ) : (
                                            <h2 className="text-lg font-bold mb-2">{item?.title}</h2>
                                        )}
                                        <ErrorMessage name="title" />

                                        {editModes[index] ? (
                                            <Field
                                                as="textarea"
                                                name="description"
                                                className="rounded-md border shadow-md border-blue-500 px-2 py-1 mb-2 block w-full"
                                            />
                                        ) : (
                                            <p className="mb-2">{item?.description}</p>
                                        )}
                                        <ErrorMessage name="description" />

                                        <div className="bg-gray-300 h-44 rounded-md border shadow-lg mt-5">
                                            <img
                                                src={`http://localhost:2000/${item?.image}`}
                                                alt={item?.title}
                                                className="mt-2 mx-auto h-40 rounded-md"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <input type="file" accept="image/*" onChange={handleImageChange} />
                                        </div>

                                        <div className="flex justify-between mt-4">
                                            <MdDelete
                                                size={30}
                                                className="hover:text-red-600 cursor-pointer"
                                                onClick={() => {
                                                    setdeleteId(item?._id);
                                                    setTimeout(() => {
                                                        fetchData();
                                                    }, 500);
                                                }}
                                            />
                                            <button
                                                type="button"
                                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                                onClick={() => toggleEditMode(index)}
                                            >
                                                {editModes[index] ? "Save" : "Edit"}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        ))}
                    </div>
                )
            }

        </>

    );
};

export default Image;
