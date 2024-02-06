import React from "react";
function Product(props) {
    return (
    <div className="w-[250px] h-auto  rounded-lg flex-shrink-0 cursor-pointer md:shadow-lg" >
      <div className="bg-transparent w-full h-[150px] ">
        <img  className="w-full h-full rounded-t-lg"
          src={props.img}
          alt=""
        />
      </div>
      <div className="flex flex-col text-black py-2 px-1">
        <h1 className="text-[14px] lg:text-md font-bold">
          {props.title}
        </h1>
        <p className="text-[10px]">{props.p_name}</p>
        <p className="text-[10px]">{props.price}</p>
      </div>
    </div>
  );
}

export default Product;
