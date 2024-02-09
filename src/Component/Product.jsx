import React from "react";
import { Link } from "react-router-dom";
function Product(props) {


    return (
    <div className="w-[250px] h-auto  rounded-lg flex-shrink-0 cursor-pointer md:shadow-md" >
      <div className="bg-transparent w-full h-[150px] ">
        <img  className="w-full h-full rounded-t-lg"
          src={props.img}
          alt=""
        />
      </div>
      <div className="w-100 h-[75px] flex flex-col text-black py-2 px-2">
        <h1 className="text-[14px] lg:text-md font-bold">
          {props.title}
        </h1>
        <p className="text-[10px]">{props.p_name}</p>
        <p className="text-[16px] font-bold">{props.price}</p>
      </div>
      <div className="w-100 flex items-center py-1 px-2 my-1 ">
       <Link to='productpage'> 
        <button className="w-1/2 h-100 bg-black text-white rounded-3xl font-bold py-1.5 shadow-sm shadow-black">Enroll now</button>
       </Link>
      </div>
    </div>
  );
}

export default Product;
