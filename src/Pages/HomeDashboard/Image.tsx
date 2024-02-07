import { useEffect, useState } from 'react';
import Http from '../../Services/Http';

interface ImageProps { }

const Image = () => {
    const [data, setData] = useState<any[]>([]);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Http({
                    url: '/image/getimage',
                    method: 'GET',
                    data: {}
                });
                setData(res.data.image);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const res = await Http({
                    url: '/image/updateimage',
                    method: 'patch',
                    data: {}
                });
                setData(res.data.image);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [])
    

    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5  gap-4">
            {data.map((item, index) => (
                <div key={index} className="bg-white shadow-lg border    rounded-md  p-4 mb-4">
                    {editMode ? (
                        <input
                            type="text"
                            className="rounded-md border shadow-md border-blue-500 px-2 py-1 mb-2 block w-full"
                            value={item.title}
                            onChange={e => {
                                const newData = [...data];
                                newData[index].title = e.target.value;
                                setData(newData);
                            }}
                        />
                    ) : (
                        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                    )}

                    {editMode ? (
                        <textarea
                            className="rounded-md border shadow-md border-blue-500 px-2 py-1 mb-2 block w-full"
                            value={item.description}
                            onChange={e => {
                                const newData = [...data];
                                newData[index].description = e.target.value;
                                setData(newData);
                            }}
                        />
                    ) : (
                        <p className="mb-2">{item.description}</p>
                    )}
                    <div className='bg-gray-300 h-44 rounded-md border shadow-lg mt-5'>
                        <img src={`http://localhost:2000/${item?.image}`} alt={item.title} className="mt-2 mx-auto h-40 rounded-md" />
                    </div>

                    <div className='mt-5'>
                        <input
                            type="file"
                            accept="image/*"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            onClick={toggleEditMode}
                        >
                            {editMode ? 'Save' : 'Edit'}
                        </button>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default Image;
