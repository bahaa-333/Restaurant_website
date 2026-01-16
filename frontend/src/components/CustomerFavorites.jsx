import React, { useEffect, useRef } from "react";
import ItemCardHero from "./ItemCardHero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../modules/CustomButton";

import background from "../assets/herbs_on_counter.png";
import favorite0 from "../assets/favorites/0.png";
import favorite1 from "../assets/favorites/1.png";
import favorite2 from "../assets/favorites/2.png";
import favorite3 from "../assets/favorites/3.png";

gsap.registerPlugin(ScrollTrigger);

const CustomerFavorites = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(backgroundRef.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // When section enters viewport
          end: "bottom bottom", // When section leaves viewport
          scrub: 1.5, // Smooth scrubbing effect
        },
      });

      // Fade in animation for the title
      gsap.from(".favorites-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Fade in animation for the swiper container
      gsap.from(".swiper-container", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".swiper-container",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  //test items to be converted into db items later
  const favorites = [
    {
      id: "item1",
      name: "Crispy Meal",
      image: favorite0,
      description:
        "Chicken Strips, Bread Bun, Coleslaw, Chedddar Sauce, Green Leaves Salad, French Fries",
      price: "7.50",
    },
    {
      id: "item2",
      name: "Beef Lasagna",
      image: favorite1,
      description:
        "Lasagna Pasta, Beef Bolognese Sauce, Bechamelle Sauce, Mozarella Cheese, Parmesan Cheese",
      price: "7.50",
    },
    {
      id: "item3",
      name: "Grilled Salmon Fillet",
      image: favorite2,
      description:
        "Grilled Salmon, Baguette Bread, Plan B Speciality Sauce, Green Leaves Salad, French Fries",
      price: "12.00",
    },
    {
      id: "item4",
      name: "Shrimp Fettuccini",
      image: favorite3,
      description:
        "Fettuccini Pasta, Grilled Shrimps, Alfredo Sauce, Mushrooms, Parmesan Cheese",
      price: "10.00",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="favorites-section relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120%", // Extra height for parallax movement
          top: "0%",
          zIndex: 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.38) 0%)",
          }}
        />
      </div>

      {/* Content Layer */}
      <div ref={contentRef} className="relative z-10 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="favorites-title text-5xl font-bold mb-11 pt-6 space-y-2 text-white drop-shadow-lg">
            Dive Into Pure Flavor With Some of Our <br />
            <span className="font-extrabold">Customer Favorites</span>
          </h2>

          <div
            className="swiper-container pb-20"
            style={{ width: "86%", margin: "0 auto" }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {favorites.map((item) => (
                <SwiperSlide key={item.id}>
                  <ItemCardHero props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Placeholder for your custom button */}
          <div className="text-center mt-12 mb-20">
            <h2 className="text-white font-semibold text-3xl font-montserrat  pb-15">
              Discover The Full Menu and Savor More Culinary Delights!
            </h2>
            <CustomButton
              props={{
                onClick: () => console.log("View Full Menu clicked"),
                label: "View Full Menu",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFavorites;
