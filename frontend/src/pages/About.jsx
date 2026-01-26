import React, { useRef } from "react";
import image from "../assets/about_page/inside_img.jpg";
import image2 from "../assets/about_page/plate_img.jpeg";
import plate from "../assets/vector_imgs/fillet_vector.png";
import burger from "../assets/vector_imgs/burger_vector.png";
import salad from "../assets/vector_imgs/salad_vector.png";
import warm from "../assets/about_page/warm.png";
import bold from "../assets/about_page/bold.png";
import fresh from "../assets/about_page/fresh.png";
import consistent from "../assets/about_page/consistent.png";
import vid from "../assets/blinking_sign.mp4";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  useGSAP(
    () => {
      // Hero section animations (unchanged)
      gsap.to(".layover", {
        opacity: 1,
        display: "flex",
        delay: 3,
        ease: "power1.inOut",
        duration: 1.5,
      });

      gsap.to(".arrow", {
        y: 20,
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      const splitStory = new SplitText(".story-title", { type: "chars" });

      gsap.fromTo(
        splitStory.chars,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 50%",
          },
        },
      );

      gsap.fromTo(
        ".story-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 40%",
          },
        },
      );

      // Animate food motifs with floating effect
      gsap.to(".motif-large", {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-10, 10)",
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      gsap.to(".motif-medium", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-8, 8)",
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.25,
      });

      gsap.to(".motif-small", {
        y: "random(-12, 12)",
        x: "random(-8, 8)",
        rotation: "random(-6, 6)",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      // Values section animations
      gsap.fromTo(
        ".values-title",
        { opacity: 0, y: -40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stagger animation for value cards
      gsap.fromTo(
        ".value-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-[#deddd1]"
    >
      {/* Restaurant video   */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <video
          src={vid}
          autoPlay
          loop
          muted
          className="w-full h-auto absolute inset-0"
        />
        {/* Layover */}
        <div className="layover opacity-0 bg-[rgba(36,36,36,0.53)] pb-4 w-full h-full inset-0 absolute z-10 flex flex-col items-center justify-end">
          <DoubleArrowIcon
            style={{ fontSize: "80px" }}
            className="arrow rotate-90 text-white"
          />
          <p className="text-white text-3xl font-semibold">About Us</p>
        </div>
      </div>

      {/* Content section */}

      {/* Our Story */}
      <div
        ref={storyRef}
        className="px-6 md:px-12 lg:px-20 min-h-[90vh] w-full relative bg-[#F3EEDD] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden"
      >
        <p className="story-title font-passion font-bold text-[#436436] text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 text-center z-20">
          Our Story
        </p>

        {/* Big motifs */}
        <img
          src={plate}
          className="motif-large w-32 md:w-40 h-auto absolute z-10 bottom-20 right-10 md:right-15 opacity-60"
          alt="plate decoration"
        />
        <img
          src={burger}
          className="motif-large w-24 md:w-30 h-auto absolute -rotate-25 z-10 bottom-40 left-10 md:left-15 opacity-60"
          alt="burger decoration"
        />
        <img
          src={salad}
          className="motif-large w-24 md:w-30 h-auto absolute -rotate-25 z-10 top-12 right-60 md:right-90 opacity-60"
          alt="salad decoration"
        />

        {/* Medium motifs */}
        <img
          src={salad}
          className="motif-medium w-18 md:w-22 h-auto absolute -rotate-25 z-10 bottom-7 left-60 md:left-80 opacity-50"
          alt="salad decoration"
        />
        <img
          src={burger}
          className="motif-medium w-20 md:w-24 h-auto absolute -rotate-25 z-10 top-2 right-9 opacity-50"
          alt="burger decoration"
        />

        {/* Small motifs */}
        <img
          src={plate}
          className="motif-small w-16 md:w-20 h-auto absolute z-10 top-10 left-80 md:left-100 opacity-40"
          alt="plate decoration"
        />
        <img
          src={burger}
          className="motif-small w-14 md:w-18 h-auto absolute -rotate-25 z-10 top-38 right-140 md:right-180 opacity-40"
          alt="burger decoration"
        />
        <img
          src={salad}
          className="motif-small w-12 md:w-15 h-auto absolute -rotate-25 z-10 bottom-37 left-120 md:left-150 opacity-40"
          alt="salad decoration"
        />
        <img
          src={burger}
          className="motif-small w-14 md:w-18 h-auto absolute -rotate-25 z-10 bottom-22 right-70 md:right-90 opacity-40"
          alt="burger decoration"
        />
        <img
          src={plate}
          className="motif-small w-16 md:w-20 h-auto absolute z-10 bottom-2 right-120 md:right-150 opacity-40"
          alt="plate decoration"
        />

        <h3 className="story-text px-4 md:px-8 lg:px-12 max-w-5xl text-xl md:text-2xl lg:text-3xl font-medium text-center leading-relaxed text-gray-800 z-20">
          Founded in 2024 in the scenic town of Rashaya, Plan-B Resto Café was
          created with a simple idea: offering a fresh alternative for food
          lovers seeking high-quality Western cuisine in a welcoming and
          contemporary space. What started as a passion for great food and
          meaningful gatherings quickly became a go-to destination for locals
          and visitors looking to enjoy comforting flavors with a modern twist.
        </h3>
      </div>

      <div className="h-auto w-full bg-[#FAF7F0] flex flex-col items-start justify-start relative">
        {/* VISION SECTION */}
        <div className="h-[80vh] w-full">
          <img
            src={image}
            alt="Restaurant interior"
            className="h-115 w-auto absolute shadow-lg shadow-gray-500 top-18 left-1 rounded-md"
          />

          {/* Our Vision */}
          <div className="flex flex-row justify-self-end mt-45 bg-[#FFD746] shadow-2xl shadow-gray-700 w-[55vw] min-h-[36vh] items-center">
            <p className="text-lg text-white text-justify ml-5 p-6 flex-1">
              Our vision is to become a leading casual dining destination in the
              region, known for consistency, creativity, and a memorable guest
              experience. We aim to continuously evolve our menu, ambiance, and
              service while staying true to our core values of quality,
              authenticity, and hospitality.
            </p>
            <p className="text-[80px] leading-[0.8] font-passion font-normal text-[#FAF7F0] pl-3 -rotate-90 pb-2">
              Our
              <br />
              Vision
            </p>
          </div>
        </div>

        {/* MISSION SECTION */}
        <div className="h-[92vh] w-full relative">
          <img
            src={image2}
            alt="Restaurant dish"
            className="h-130 w-auto absolute shadow-lg shadow-gray-500 top-10 right-4 mb-80 rounded-md"
          />

          {/* Our Mission */}
          <div className="flex flex-row relative mt-40 z-10 bg-[#436436] shadow-2xl shadow-gray-700 mb-0 w-[69vw] h-auto py-15 items-center self-start">
            <p className="text-[80px] leading-[0.8] font-passion font-normal text-[#FAF7F0] rotate-90">
              Our
              <br />
              Mission
            </p>
            <p className="text-lg text-white text-justify p-6 mr-6 flex-1">
              At Plan-B, our mission is to deliver delicious, well-crafted
              dishes using carefully selected ingredients, served in a warm and
              vibrant environment. We strive to create a place where friends and
              families can connect, relax, and enjoy every moment, whether for a
              quick lunch, a casual dinner, or a special gathering.
            </p>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div
          ref={valuesRef}
          className="h-[96vh] w-full bg-gradient-to-br from-[#8fa47f] to-[#7a8f6d] px-12 flex flex-col items-center justify-center"
        >
          <h1 className="values-title font-passion font-bold text-7xl mb-10 pt-4 text-[#436436] drop-shadow-lg text-center">
            The Plan-B Promise
          </h1>

          <div className="flex flex-row justify-evenly items-stretch w-full max-w-7xl gap-8">
            {/* Fresh Ingredients */}
            <div className="value-card flex flex-col gap-5 justify-center items-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 flex-1 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-2 border-white/20">
              <div className=" bg-[#436436] rounded-full p-8 shadow-2xl">
                <img
                  src={fresh}
                  alt="fresh_ingredients"
                  className="w-28 h-auto"
                />
              </div>
              <h2 className="font-passion font-semibold text-white text-3xl text-center leading-tight">
                Fresh Ingredients
              </h2>
              <p className="text-white/90 text-center text-base leading-relaxed">
                Only the finest, locally-sourced ingredients make it to your
                plate
              </p>
            </div>

            {/* Bold Flavors */}
            <div className="value-card flex flex-col gap-5 justify-center items-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 flex-1 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-2 border-white/20">
              <div className=" bg-[#436436] rounded-full p-8 shadow-2xl">
                <img src={bold} alt="bold_flavors" className="w-28 h-auto" />
              </div>
              <h2 className="font-passion font-semibold text-white text-3xl text-center leading-tight">
                Bold Flavors
              </h2>
              <p className="text-white/90 text-center text-base leading-relaxed">
                Creative dishes that excite your taste buds with every bite
              </p>
            </div>

            {/* Warm Hospitality */}
            <div className="value-card flex flex-col gap-5 justify-center items-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 flex-1 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-2 border-white/20">
              <div className="bg-[#436436] rounded-full p-8 shadow-2xl">
                <img
                  src={warm}
                  alt="warm_hospitality"
                  className="w-28 h-auto"
                />
              </div>
              <h2 className="font-passion font-semibold text-white text-3xl text-center leading-tight">
                Warm Hospitality
              </h2>
              <p className="text-white/90 text-center text-base leading-relaxed">
                Service that makes you feel like family from the moment you
                arrive
              </p>
            </div>

            {/* Consistent Quality */}
            <div className="value-card flex flex-col gap-5 justify-center items-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 flex-1 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-2 border-white/20">
              <div className="bg-[#436436] rounded-full p-8 shadow-2xl">
                <img
                  src={consistent}
                  alt="consistent_quality"
                  className="w-28 h-auto"
                />
              </div>
              <h2 className="font-passion font-semibold text-white text-3xl text-center leading-tight">
                Consistent Quality
              </h2>
              <p className="text-white/90 text-center text-base leading-relaxed">
                Excellence you can count on, visit after visit, dish after dish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
