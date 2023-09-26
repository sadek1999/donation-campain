
import Details from './../Details/Details';

const ShowDonatio = ({donation}) => {
   const {img,title,type,price ,themeColor,color_bg,textColor}=donation;
   const a={
    backgroundColor:themeColor,
   }
   const c={
    backgroundColor:color_bg,
    color:textColor
}
const b={
    backgroundColor:textColor
}

    return (
        <div>

             

            <div className=" flex flex-col md:flex-row rounded-xl  text-gray-700" style={c}>
                <div className="">
                    <img className="w-full h-full"
                        src={img}
                        alt=""
                        
                    />
                </div>
                <div className="p-6" >
                    <button className={" px-3 py-1 rounded" } style={a}>{type}</button>
                    <h5 className="mb-2 block text-black  text-xl font-bold  ">
                        {title}
                    </h5>
                    <h3 className='font-semibold'>${price}</h3>
                    <button className='btn text-white mt-4' style={b}>view Details</button>
                    
                </div>
                
            </div>
        </div>
    );
};

export default ShowDonatio;