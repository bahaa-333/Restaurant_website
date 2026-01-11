import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo_b from "../assets/logo_no_bg.png";
import logo_w from "../assets/white_logo_no_bg.png";
import "../index.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/*Row styled div with space between items*/}
      <div
        className={`flex flex-row justify-between items-center px-[5vw] py-3 
          ${scrolled ? "bg-gray-200" : "bg-gray-200/20"} 
          fixed top-0 left-0 w-full z-50 transition-colors duration-300`}
      >
        {/*includes logo image; left aligned*/}
        <img
          src={scrolled ? logo_b : logo_w}
          alt="logo"
          className="h-[45px] "
        />

        {/*includes navigation links; right aligned*/}
        <ul
          className={`hidden sm:flex gap-8 text-m font-montserrat ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[2px] bg-cyan-800 hidden" />{" "}
            {/*adds the underline, but hidden until active*/}
          </NavLink>

          <NavLink to="/menu" className="flex flex-col items-center gap-1">
            <p>Menu</p>
            <hr className="w-2/4 border-none h-[2px] bg-cyan-800 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[2px] bg-cyan-800 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[2px] bg-cyan-800 hidden" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
