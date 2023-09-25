

const Bannar = () => {
    return (
        <div>
            <div className="">
                  <img className="w-[1213px]
                   h-96 absolute" src="../../../../public/Resources/group-hospital-doctors-over-health-care-clinic-background-89857953.webp" alt="" />
            </div>
            <div className="bg-[#FFFFFFF2] w-full h-96 relative space-y-3  items-center ">

                <div>
                <h1 className="uppercase text-4xl font-bold">I Grow By Helping People In Need</h1>
                </div>
                
                <div className=" mx-auto relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                    <input
                        type="email"
                        className="peer h-full w-full rounded-[7px] border  px-3 py-2.5 pr-20 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border  focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        required
                    />
                    <button
                        className="!absolute right-1 top-1 z-10 select-none rounded bg-red-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Invite
                    </button>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                       Title
                    </label>
                </div>
                
                
            </div>
        </div>
    );
};

export default Bannar;