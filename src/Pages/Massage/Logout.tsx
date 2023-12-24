import type { FC } from 'react';

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => {
    return (
        <>
             <div className="mb-4 absolute z-50 top-0 left-[40%] ">
                        <div className="flex max-w-sm w-[250px] bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                            <div className="w-2 bg-green-600"></div>
                            <div className="w-full flex justify-between items-start px-2 py-2">
                                <div className="flex flex-col ml-2">
                                    <label className="text-gray-800 py-2">
                                       Logout Successful
                                    </label>
                                  
                                </div>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {/* <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        /> */}
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Logout;
