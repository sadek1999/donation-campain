import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    // const {bg,setbg}=useState('')
    const { title,img,type, themeColor,color_bg,textColor,id} = card;
    // setbg(color_bg)
    const c={
        backgroundColor:color_bg,
        color:textColor
    }
    const a={
        backgroundColor:themeColor
    }
    
    
    return (
        <div>
            <Link to={`/details/${id}`}>
            
            <div className=" card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div  className={`p-5 space-y-2 `} style={c}>

                <button className='py-1 px-3 rounded-md' style={a} >{type}</button>
                    <h2 className="text-xl font-bold">{title}</h2>
                  
                </div>
            </div>
            </Link>
           
        </div>
    );
};

export default Card;