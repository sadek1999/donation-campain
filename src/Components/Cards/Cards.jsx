import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({value}) => {
    
    console.log(value)
    const [cards,setCars]=useState([]);
    const[newCard,setnewCard]=useState([]);
    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    
    const typecard=cards.filter(card=>card.type===value)
    
    
    
    
    return (
        <div>
            <div className={typecard?.length<0 && 'hidden'}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {
                typecard.map(card=><Card key={card.id} card={card}></Card>) 
            }
            </div>
            </div>

            <div className={typecard?.length>0&& 'hidden'}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            
            { 
                cards.map(card=><Card key={card.id} card={card}></Card>)
            }
            
            </div>
            </div>
        
        </div>
    );
};

export default Cards;