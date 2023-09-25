import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const cards=useLoaderData()
    const{id}=useParams();
    const idInt=parseInt(id);
    const card=cards.find(card=>card.id===idInt)

    console.log(cards,idInt,card)
    return (
        <div>
            <h1>This is details pag</h1>
        </div>
    );
};

export default Details;