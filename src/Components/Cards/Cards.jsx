import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [cards,setCars]=useState([]);
    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Cards;