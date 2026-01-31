import React from "react";
import logo from "../assets/logo_no_bg.png";
import video from "../assets/grill_video.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SwiperShow from "./SwiperShow.jsx";

const Hero = () => {
  return (
    <div className="hero-section flex">
      <div className="w-[78%] p-3 h-dvh">
        {/* Left Side - video */}
        {/*stack of video, logo, slogan*/}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <video
            src={video}
            muted
            autoPlay
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 p-8 pointer-events-none">
            <img
              src={logo}
              alt="Plan-B logo"
              className="w-[38%]  drop-shadow-xl"
            />
            <h2 className="text-white text-2xl font-montserrat leading-snug drop-shadow-lg pl-4">
              the perfect Plan-B for when Mom's homecooked meals <br /> just
              won't cut it
            </h2>
          </div>
        </div>
      </div>

      <div className="w-[20%] h-dvh bg-inherit py-3 items-center ">
        {/* Right Side - verical caroussel  */}
        <SwiperShow />
      </div>
    </div>
  );
};

export default Hero;
