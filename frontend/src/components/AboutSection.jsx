import React from "react";
import bg from "../assets/about_imgs/about-bg.jpg";
import ft from "../assets/about_imgs/about-front.jpg";
import rosemary from "../assets/rosemary_curved.png";
import rosemary2 from "../assets/rosemary_strand.png";
import anise from "../assets/anise_bowl.png";

const AboutSection = () => {
  return (
    <div className="about-section relative overflow-hidden">
      <img
        src={rosemary2}
        className="w-70 h-auto absolute top-12 -left-17 rotate-145 z-10"
      />
      <div className="flex flex-col justify-start items-start ml-20 mb-20">
        {/*photos*/}
        <img
          src={bg}
          alt="restaurant_img"
          className="h-172 w-auto py-20 absolute"
        />

        <img
          src={ft}
          alt="plan-B_dishes"
          className="z-10 h-63 w-auto relative mt-85 ml-59 shadow-black shadow-[-8px_22px_30px_rgba(0,0,0,0.35)]"
        />
      </div>

      <div className="mt-25 ml-52">
        {/*title*/}
        <div>
          <h1 className="font-montserrat font-bold text-3xl mb-2 tracking-wider text-[#ffd476] ">
            Welcome To Plan-B
          </h1>
          <h1 className="font-montserrat font-black text-5xl tracking-wide text-black mb-12">
            Dive Into Pure Flavor
          </h1>
        </div>

        {/*description*/}
        <div>
          <h2 className="font-inter font-normal text-lg text-black w-180">
            Plan-B Resto Café, founded in 2024 and nestled in the heart of
            Rashaya, Lebanon, brings a fresh and modern touch to Western cuisine
            in a warm and inviting setting. The restaurant offers a rich
            selection of flavorful pastas, gourmet sandwiches, juicy burgers,
            crisp salads, and unique Plan-B signature specialties, all prepared
            with quality ingredients and attention to detail, creating a relaxed
            yet vibrant destination for food lovers to enjoy great taste and
            atmosphere.
          </h2>
        </div>

        {/*buttons*/}
        <div className="mt-8 relative">
          <button className="bg-[#ffd476] text-white font-inter font-medium text-base py-3 px-6 rounded-md  mt-10 mr-6 border-2 border-[#ffd476] hover:shadow-xl transition duration-500">
            Explore Menu
          </button>
          <button className="bg-white text-black font-inter font-medium text-base py-3 px-6 rounded-md mt-10 border-2 border-black hover:shadow-xl hover:border-[#436436] hover:text-[#436436] transition duration-400">
            Learn More
          </button>
        </div>

        {/* Rosemary positioned on screen edge */}
        <img
          src={rosemary}
          alt="rosemary_strand"
          className="absolute -right-[40px] top-[480px] w-70 h-auto rotate-45 z-10"
        />
      </div>
      <img src={anise} className="w-38 relative top-5" />
    </div>
  );
};

export default AboutSection;
