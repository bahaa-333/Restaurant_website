import React from "react";

const CustomButton = ({ props }) => {
  return (
    <button
      onClick={props.onClick}
      className="relative w-60 h-14 focus:outline-none group"
    >
      {/* Bottom layer */}
      <div
        className="
      absolute inset-0 
      bg-[#FFD746] 
      translate-y-2 translate-x-2 
      group-hover:shadow-2xl 
      group-hover:drop-shadow-black
      "
      />

      {/* Top button */}
      <div
        className="
          absolute inset-0
          bg-[#436436]
          flex items-center justify-center
          text-white
          font-montserrat font-bold uppercase
          transition-all duration-200
          group-hover:-translate-y-0.5
          group-hover:shadow-lg group-hover:drop-shadow-[rgba(1,1,1,0.75)]
          group-active:translate-y-1
        "
      >
        {props.label}
      </div>
    </button>
  );
};

export default CustomButton;
