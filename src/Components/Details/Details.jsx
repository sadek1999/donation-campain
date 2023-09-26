import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDatalocaly } from "../utility/SaveData";
  


const Details = () => {
    const cards=useLoaderData()
    const{id}=useParams();
    const idInt=parseInt(id);
    const card=cards.find(card=>card.id===idInt)
    const {img,price,textColor,details,title}=card;
    const c={
        backgroundColor:textColor,
    }
     const donate =()=>{
       
        toast.success('Thank you for donation', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            saveDatalocaly(idInt)
     }

    // console.log(cards,idInt,card)
    return (
        <div>
            <div className="w-full h-full relative">
            <img className="w-full h-full lg:h-[500px]  " src={img} alt="" />
            <div className="p-5 bg-[#0B0B0B80] absolute -mt-[75px] w-full">
                <button onClick={donate} className=" rounded justify-start text-xl text-white  py-1 px-2 " style={c}>Donate ${price}</button>
            </div>
            </div>
            
            <div className="mt-12 space-y-3">
            <h1 className="text-4xl font-bold ">{title}</h1>
        <p>{details}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;