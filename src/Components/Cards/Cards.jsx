import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards,setCars]=useState([]);
    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {
                cards.map(card=><Card key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

export default Cards;