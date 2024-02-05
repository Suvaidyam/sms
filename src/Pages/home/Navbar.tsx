import type { FC } from 'react';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {
    return (
        <>
            <>
                <div
                    className="logo text-center color-gray-700 font-sans text-base font-normal leading-normal tracking-normal box-border"
                    style={{ backgroundColor: "#fff" }}
                >
                    <a
                        href="https://www.scindia.edu/"
                        className="box-border text-blue-500 no-underline border-none outline-none"
                    >
                        <img
                            src="https://www.scindia.edu/wp-content/themes/scindia/images/logo.png"
                            alt="The Scindia School"
                            className="box-border border-none align-middle outline-none"
                        />
                    </a>
                </div>
                <div
                    className="eportal font-normal font-serif text-right text-xs mt-[-45px] color-gray-700 bg-white box-border"
                    style={{ margin: "-45px 0px 0px" }}
                >
                    <a
                        href="https://quickschool.niitnguru.com/Scindia"
                        target="_blank"
                        title="For Staff, Students & Parent"
                        className="box-border text-gray-700 no-underline border-none outline-none inline-block mr-5 relative z-10"
                    >
                        E-PORTAL
                    </a>
                    <span>&nbsp;</span>|<span>&nbsp;</span>
                    <a
                        href="https://events.scindia.edu/"
                        target="_blank"
                        title="For Visitors"
                        className="box-border text-gray-700 no-underline border-none outline-none inline-block mr-5 relative z-10"
                    >
                        EVENTS @ SCINDIA
                    </a>
                    <div
                        className="column absolute left-0 w-48 p-0 mt-[-32px] ml-15 box-border"
                        style={{ width: 200, margin: "-32px 0px 0px 15px" }}
                    >
                        <div
                            id="sb-search"
                            className="sb-search overflow-hidden relative mt-10 w-0 min-w-30 h-30 float-right transition-width duration-300 ease-in box-border"
                        >
                            <div className="overflow-hidden w-0 h-0 box-border">
                                {/* <gcse:search className="box-border" /> */}
                                <br />
                            </div>
                            <form
                                method="get"
                                action="https://www.scindia.edu/search/"
                                className="box-border"
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    defaultValue=""
                                    name="q"
                                    id="q"
                                    size={75}
                                    className="sb-search-input box-border text-gray-600 font-sans text-sm bg-gray-200 absolute top-0 right-0 w-48 z-10 p-5"
                                />
                                <input
                                    type="submit"
                                    defaultValue=""
                                    className="sb-search-submit box-border text-transparent w-30 h-30 block absolute right-0 top-0 p-0 text-center cursor-pointer bg-white opacity-0 z-[-1] appearance-none"
                                />
                                <span
                                    className="sb-icon-search box-border w-30 h-30 block absolute right-0 top-0 p-0 m-0 text-center cursor-pointer text-white bg-white z-90"
                                // style={{ speak: "none" }}
                                >
                                    <img
                                        src="https://www.scindia.edu/wp-content/themes/scindia/images/search.png"
                                        className="box-border border-none align-middle outline-none"
                                    />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}

export default Navbar;
