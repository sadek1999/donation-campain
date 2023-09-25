
const getDatalocaly =()=>{
    const donations=localStorage.getItem('donation');
    if(donations.length>0){
        return JSON.parse(donations)
    }
    return[]
}

const saveDatalocaly=id=>{
  const donations=getDatalocaly();
  donations.push(id);
  localStorage.setItem('donation',JSON.stringify(donations))
}


export{saveDatalocaly,getDatalocaly}