import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import starters from "../assets/main-menu-page/starters.jpeg";
import pastas from "../assets/main-menu-page/pastas.jpeg";
import speciality from "../assets/main-menu-page/speciality.jpeg";
import burger from "../assets/main-menu-page/burger.jpeg";
import sandwiches from "../assets/main-menu-page/sandwiches.jpeg";
import kidsmeal from "../assets/main-menu-page/kidsmeal.jpeg";
import desserts from "../assets/main-menu-page/desserts.jpeg";
import salads from "../assets/main-menu-page/salads.jpeg";
import table from "../assets/main-menu-page/table.jpg";

gsap.registerPlugin(SplitText, GSDevTools);
gsap.config({ trialWarn: false });

const MenuMain = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    console.clear();

    const repeatCount = 8;
    const tl = gsap.timeline({ paused: true });
    const split = new SplitText(h1Ref.current, { type: "chars" });

    split.chars.forEach((obj, i) => {
      let txt = obj.innerText;
      let clone = `<div class="cloneText"> ${txt} </div>`;
      let newHTML = `<div class="originalText"> ${txt} </div>${clone}`;
      obj.innerHTML = newHTML;

      // Add overflow hidden to the parent character element
      gsap.set(obj, {
        overflow: "hidden",
        display: "inline-block",
        position: "relative",
      });

      gsap.set(obj.childNodes[1], {
        yPercent: i % 2 === 0 ? -100 : 100,
      });

      let tween = gsap.to(obj.childNodes, {
        repeat: repeatCount,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100",
      });
      tl.add(tween, 0);
    });
    gsap.to(tl, { progress: 1, duration: 4, ease: "power4.inOut" });

    // GSDevTools.create();

    // Cleanup function
    return () => {
      split.revert();
      tl.kill();
    };
  }, []);

  const categories = [
    {
      name: "Starters",
      image: starters,
      alt: "Delicious starter dishes at Plan-B Resto-Café",
    },
    {
      name: "Soups",
      image: starters,
      alt: "Warm and comforting soup selections",
    },
    { name: "Salads", image: salads, alt: "Fresh and healthy salad options" },
    { name: "Pastas", image: pastas, alt: "Italian pasta dishes" },
    {
      name: "Plan-B Speciality",
      image: speciality,
      alt: "Plan-B signature specialty dishes",
    },
    {
      name: "Burgers",
      image: burger,
      alt: "Gourmet burgers with premium ingredients",
    },
    {
      name: "Sandwiches",
      image: sandwiches,
      alt: "Artisan sandwiches and subs",
    },
    { name: "Kids Meals", image: kidsmeal, alt: "Kid-friendly meal options" },
    { name: "Desserts", image: desserts, alt: "Sweet desserts and treats" },
    {
      name: "Cold Beverages",
      image: desserts,
      alt: "Refreshing cold drinks and beverages",
    },
    {
      name: "Hot Beverages",
      image: desserts,
      alt: "Hot coffee, tea, and specialty drinks",
    },
    {
      name: "Smoothies",
      image: desserts,
      alt: "Fresh fruit smoothies and blended drinks",
    },
    { name: "Shisha", image: desserts, alt: "Shisha and hookah options" },
  ];

  return (
    <div>
      {/* Header with logo */}
      <header className="top-0 relative flex bg-gray-900 items-center justify-center">
        <img
          src={table}
          alt="Plan-B"
          className="h-80 w-full self-center"
          width="200"
          height="auto"
        />
      </header>

      {/* Main content */}
      <div className="bg-[#F3EEDD] w-full h-auto py-20 pb-24">
        {/* Animated heading with overflow control */}
        <h1
          ref={h1Ref}
          className="text-center text-6xl font-bold mb-10 overflow-hidden"
          style={{ lineHeight: "1.2" }}
        >
          Dive Into Pure Flavor With Our Curated Menu
        </h1>

        {/* Menu categories grid */}
        <nav
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 max-w-7xl mx-auto"
          aria-label="Menu categories"
        >
          {categories.map((category, index) => (
            <article
              key={index}
              className="flex items-center relative justify-center drop-shadow-[rgba(0,0,0,0.64)] drop-shadow-lg h-80"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-full object-cover rounded-xl relative"
                loading={index < 4 ? "eager" : "lazy"}
                width="600"
                height="320"
              />
              <div
                className="w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.68)] rounded-xl absolute z-5"
                aria-hidden="true"
              />
              <h2 className="absolute text-white bottom-4 left-6 text-5xl md:text-7xl tracking-[0.08em] font-semibold font-passion z-10">
                {category.name}
              </h2>
            </article>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MenuMain;
