import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { title,img,type, themeColor,backgroundColor,textColor,id} = card;
    return (
        <div>
            <Link to={`/details/${id}`}>
            
            <div className=" card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className={`card-body `}>

                <button className={``} >{type}</button>
                    <h2 className="card-title">{title}</h2>
                  
                </div>
            </div>
            </Link>
           
        </div>
    );
};

export default Card;