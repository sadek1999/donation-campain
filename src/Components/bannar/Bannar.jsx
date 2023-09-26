import { useState } from "react";


const Bannar = () => {
    const[value,setValue]=useState("ALL")
    const handalClick=()=>{
        console.log('click on the search button')
    }
    console.log(value)
    return (
        <div  className="">
            <div className="h-full w-full  ">
                 
           
            <div className=" w-full h-96 z-20 space-y-3  items-center bg-no-repeat bg-cover  
             bg-[url(../../../../public/Resources/group-hospital-doctors-over-health-care-clinic-background-89857953.webp)]">

                <div className=" w-full h-96 bg-[#FFFFFFCC] flex items-center">
                    <div className="md:w-2/3 mx-auto  ">
                    <h1 className="uppercase text-xl md:text-4xl font-bold text-center ">I Grow By Helping People In Need</h1>
                    <div className=" flex justify-center mt-3">
                    <input onChange={(e)=>{setValue(e.target.value)}}  type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mr-2 " />



                    <button onClick={handalClick} className="btn bg-red-500 text-white">search</button>
                    </div>
                   
                   
                
                    </div>
                
                </div>
                
                </div>
                
                
            </div>
        </div>
    );
};

export default Bannar;