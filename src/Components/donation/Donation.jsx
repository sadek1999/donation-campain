import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDatalocaly } from "../utility/SaveData";


const Donation = () => {
    const cards=useLoaderData();
    const [donations,setDonations]=useState([])
    useEffect(()=>{
        const donations=getDatalocaly()
        const data=[]
        for(const id of donations){
            const card =cards.find(card=>card.id===id)
            if(card){
                data.push(card)
            }
        }
        setDonations(data);
        
    },[])
    console.log(donations)
    

    return (
        <div>
        <h1>This is donation patge ...........</h1>
        </div>
    );
};

export default Donation;