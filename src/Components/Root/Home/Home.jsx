
import Cards from "../../Cards/Cards";
// import Bannar from "../../bannar/Bannar";
import { useRef, useState } from "react";

const Home = () => {
    // const [text, settext] = useState("")
    const nameref=useRef(null)
  const[value,setValue]=useState('')
    
    const handalsubmit = e =>{
          e.preventDefault();
         setValue(nameref.current.value.toLowerCase()) 
    }
    // console.log(value)
    
    return (
        <div>
            {/* <Bannar></Bannar> */}
            <div className="">
                <div className="h-full w-full  ">


                    <div className=" w-full h-96 z-20 space-y-3  items-center bg-no-repeat bg-cover  
             bg-[url(../../../../public/Resources/group-hospital-doctors-over-health-care-clinic-background-89857953.webp)]">

                        <div className=" w-full h-96 bg-[#FFFFFFCC] flex items-center">
                            <div className="md:w-2/3 mx-auto  ">
                                <h1 className="uppercase text-xl md:text-4xl font-bold text-center ">I Grow By Helping People In Need</h1>
                                <div className=" flex justify-center mt-3">
                                    <form className="flex" onSubmit={handalsubmit} action="">

                                        <input ref={nameref} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mr-1 " />

                                        <input className="bg-red-500 py-1 px-3 font-bold text-xl rounded-md text-white" type="submit" value="search" />

                                        

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