
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDatalocaly } from "../../utility/SaveData";
import React from 'react';
import Chart from 'react-apexcharts';




const Statistics = () => {
  const cards = JSON.parse(useLoaderData());
  const [donations, setDonations] = useState([])
  
  useEffect(() => {
      const donations = getDatalocaly()
      const data = []
      for (const id of donations) {
          const card = cards.find(card => card.id === id)
          if (card) {
              data.push(card)
          }
      }
      setDonations(data);

  }, [])
 


  const a=donations.length;
  const b=cards.length-donations.length;
  return (
    
    <React.Fragment>
      <div className="flex justify-center  items-center w-full  h-96 ">
    
        <Chart 
         type='pie'
         height={400}
         width={393}
         series={[a,b]}
         options={
          {
            labels:['Your Donations','Total Donations']
          }
         }

        >

        </Chart>
      </div>
    </React.Fragment>
  );
};

export default Statistics;