import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CustomerFavorites from "../components/CustomerFavorites";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <CustomerFavorites />
    </div>
  );
};

export default Home;
