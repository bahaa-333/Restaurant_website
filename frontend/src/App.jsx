import React from "react";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MenuMain from "./pages/MenuMain.jsx";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<MenuMain />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
