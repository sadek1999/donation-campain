
const getDatalocaly =()=>{
    const donations=localStorage.getItem('donation');
    if(donations){
        return JSON.parse(donations)
    }
    return[]
}

const saveDatalocaly=id=>{
  const donations=getDatalocaly();
  const exist=donations.find(donation=>donation === id)
  if(!exist){
    donations.push(id);
    localStorage.setItem('donation',JSON.stringify(donations))
  }

  
}


export{saveDatalocaly,getDatalocaly}