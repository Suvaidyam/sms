import type { FC } from 'react';

interface TemplateProps { }

const Template: FC<TemplateProps> = () => {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
                <div className="w-full bg-white shadow-lg border rounded-md p-4 mb-4" >
                    <h2 className="text-lg font-bold mb-2 h-8 bg-slate-300  rounded-md animate-pulse"></h2>
                    <p className="mb-2 h-14 bg-slate-300 rounded-md animate-pulse"></p>
                    <div className='w-full h-40 bg-slate-300 rounded-md animate-pulse'></div>
                    <button className="bg-gray-300 text-white px-4 py-2 rounded mr-2 animate-pulse"></button>
                </div>
                <div className="w-full bg-white shadow-lg border rounded-md p-4 mb-4" >
                    <h2 className="text-lg font-bold mb-2 h-8 bg-slate-300  rounded-md animate-pulse"></h2>
                    <p className="mb-2 h-14 bg-slate-300 rounded-md animate-pulse"></p>
                    <div className='w-full h-40 bg-slate-300 rounded-md animate-pulse'></div>
                    <button className="bg-gray-300 text-white px-4 py-2 rounded mr-2 animate-pulse"></button>
                </div>
                <div className="w-full bg-white shadow-lg border rounded-md p-4 mb-4" >
                    <h2 className="text-lg font-bold mb-2 h-8 bg-slate-300  rounded-md animate-pulse"></h2>
                    <p className="mb-2 h-14 bg-slate-300 rounded-md animate-pulse"></p>
                    <div className='w-full h-40 bg-slate-300 rounded-md animate-pulse'></div>
                    <button className="bg-gray-300 text-white px-4 py-2 rounded mr-2 animate-pulse"></button>
                </div>
                <div className="w-full bg-white shadow-lg border rounded-md p-4 mb-4" >
                    <h2 className="text-lg font-bold mb-2 h-8 bg-slate-300  rounded-md animate-pulse"></h2>
                    <p className="mb-2 h-14 bg-slate-300 rounded-md animate-pulse"></p>
                    <div className='w-full h-40 bg-slate-300 rounded-md animate-pulse'></div>
                    <button className="bg-gray-300 text-white px-4 py-2 rounded mr-2 animate-pulse"></button>
                </div>
                <div className="w-full bg-white shadow-lg border rounded-md p-4 mb-4" >
                    <h2 className="text-lg font-bold mb-2 h-8 bg-slate-300  rounded-md animate-pulse"></h2>
                    <p className="mb-2 h-14 bg-slate-300 rounded-md animate-pulse"></p>
                    <div className='w-full h-40 bg-slate-300 rounded-md animate-pulse'></div>
                    <button className="bg-gray-300 text-white px-4 py-2 rounded mr-2 animate-pulse"></button>
                </div>
                <div className="w-full bg-white shadow-lg border rounded-md p-4 mb-4" >
                    <h2 className="text-lg font-bold mb-2 h-8 bg-slate-300  rounded-md animate-pulse"></h2>
                    <p className="mb-2 h-14 bg-slate-300 rounded-md animate-pulse"></p>
                    <div className='w-full h-40 bg-slate-300 rounded-md animate-pulse'></div>
                    <button className="bg-gray-300 text-white px-4 py-2 rounded mr-2 animate-pulse"></button>
                </div>
                
            </div>
        </>
    );
}

export default Template;
