
import Cards from "../../Cards/Cards";

import { useEffect, useRef, useState } from "react";


const Home = () => {
   
    const nameref=useRef(null)
  const[value,setValue]=useState('')
  
    
    const handalsubmit = e =>{
          e.preventDefault();
         setValue(nameref.current.value.toLowerCase())
         nameref.current.value=''; 
    }
    
    
    return (
        <div>
           
            <div className="">
                <div className="h-full w-full  ">


                    <div className=" w-full h-96 z-20 space-y-3  items-center bg-no-repeat bg-cover  
             bg-[url(https://i.ibb.co/grm4Y0f/donation.png)]">

                        <div className=" w-full h-96 bg-[#FFFFFFCC] flex items-center">
                            <div className="md:w-2/3 mx-auto  ">
                                <h1 className="uppercase text-xl md:text-4xl font-bold text-center ">I Grow By Helping People In Need</h1>
                                <div className=" flex justify-center mt-3">
                                    <form className="flex" onSubmit={handalsubmit} action="">

                                        <input ref={nameref} type="text" placeholder="Type here" className="   w-full rounded-l-sm md:w-80 p-1  " />

                                        <input className="bg-red-500 py-1 px-3 font-bold text-xl rounded-r-md text-white" type="submit" value="search" />

                                        

                                    </form>

                                </div>



                            </div>

                        </div>

                    </div>


                </div>
            </div>
            <Cards 

value={value}
            ></Cards>

        </div>
    );
};

export default Home;