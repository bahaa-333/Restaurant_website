import React from "react";

const ItemCardHero = ({ props, className = "" }) => {
  return (
    <div
      className={
        "flex flex-row h-[500px] sm:flex-col w-full border-0.5 bg-[rgba(255,255,255,0.37)] rounded-2xl border-gray-900 overflow-hidden shadow-xl "
      }
    >
      {/* Image Container */}
      <div className="w-1/3 sm:w-full  overflow-hidden flex-shrink-0">
        <img
          className="w-auto h-[350px] m-auto object-cover"
          src={props.image}
          alt={props.name}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-4 sm:pl-4 pl-6  flex-grow">
        <div>
          <h2 className="text-xl text-white font-semibold font-montserrat mb-2">
            {props.name}
          </h2>
          <p className="text-gray-200 shadow-2xs font-inter mb-4">
            {props.description}
          </p>
        </div>
        <div className="text-lg font-bold font-montserrat text-gray-200">
          ${props.price}
        </div>
      </div>
    </div>
  );
};

export default ItemCardHero;
