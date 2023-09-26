import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDatalocaly } from "../utility/SaveData";
import ShowDonatio from "../ShowDonation/ShowDonatio";


const Donation = () => {
    const cards=useLoaderData();
    const [donations,setDonations]=useState([])
    const[datalength,setDatalength]=useState(4)
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
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {
            donations.slice(0,datalength) .map(donation=><ShowDonatio key={donation.id} donation={donation}></ShowDonatio>)
        }
            </div>
            
            <div  className={datalength===donations.length || donations.length <= 4 ?'hidden':''}>
                
                    
                              
            <button onClick={()=>setDatalength(donations.length)} className="btn btn-primary ">Show All</button>
            </div>
            
        
        </div>
    );
};

export default Donation;