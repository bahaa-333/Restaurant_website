import React, { useState, useEffect, useRef } from "react";
import {
  LuUserRound,
  LuMail,
  LuPhone,
  LuClock,
  LuMapPin,
  LuSend,
  LuCircleAlert,
} from "react-icons/lu";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Refs for GSAP animations
  const heroTitleRef = useRef(null);
  const formRef = useRef(null);
  const contactCardRef = useRef(null);
  const faqSectionRef = useRef(null);
  const faqCardsRef = useRef([]);
  const mapSectionRef = useRef(null);

  // GSAP animations with ScrollTrigger - runs once when entering viewport
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - triggers immediately on load
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Contact card animation
      gsap.from(contactCardRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactCardRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // FAQ cards stagger animation
      if (faqCardsRef.current.length > 0) {
        gsap.from(faqCardsRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqSectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Map section animation
      gsap.from(mapSectionRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapSectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return name.trim() !== "" && nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone && phone.length >= 10;
  };

  const handleBlur = (field) => {
    if (field === "name" && formData.name) {
      setErrors((prev) => ({ ...prev, name: !validateName(formData.name) }));
    } else if (field === "email" && formData.email) {
      setErrors((prev) => ({ ...prev, email: !validateEmail(formData.email) }));
    } else if (field === "phone" && formData.phone) {
      setErrors((prev) => ({ ...prev, phone: !validatePhone(formData.phone) }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [name]: filteredValue });
      if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
    } else if (name === "email") {
      setFormData({ ...formData, [name]: value });
      if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValid = validateName(formData.name);
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    setErrors({
      name: !nameValid,
      email: !emailValid,
      phone: !phoneValid,
    });

    if (nameValid && emailValid && phoneValid) {
      alert("Thank you! We'll get back to you soon.");
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFormStatus("");
        setErrors({ name: false, email: false, phone: false });
      }, 1800);
    } else {
      setFormStatus("");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center px-5 py-20">
          <div className="container max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Contact Info Card */}
              <div className="order-2 lg:order-1" ref={contactCardRef}>
                <div className="bg-gradient-to-br from-[#4a7a3a] to-[#3d6430] rounded-2xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#FFD746]/20">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <h1 className="text-3xl lg:text-4xl font-passion font-bold text-white leading-tight">
                        We'd Love to Hear From You!
                      </h1>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        Whether you're planning a visit, making a reservation,
                        or have a question about our menu, the Plan-B team is
                        here to help.
                      </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                      {/* Working Hours */}
                      <div className="flex items-start gap-4 p-4 bg-[#FFD746]/10 rounded-lg hover:bg-[#FFD746]/20 transition-colors border border-[#FFD746]/30">
                        <LuClock className="text-[#FFD746] text-2xl shrink-0 mt-1" />
                        <div>
                          <h2 className="text-xl font-passion font-semibold text-white mb-2">
                            Working Hours
                          </h2>
                          <p className="text-white/90">Monday - Sunday</p>
                          <p className="text-white/90 font-semibold">
                            12:30 PM - 11:30 PM
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 p-4 bg-[#FFD746]/10 rounded-lg hover:bg-[#FFD746]/20 transition-colors border border-[#FFD746]/30">
                        <LuPhone className="text-[#FFD746] text-2xl shrink-0 mt-1" />
                        <div>
                          <h2 className="text-xl font-passion font-semibold text-white mb-2">
                            Phone
                          </h2>
                          <a
                            href="tel:+96171459869"
                            className="text-white/90 hover:text-white transition-colors text-lg"
                          >
                            +961 71 459 869
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4 p-4 bg-[#FFD746]/10 rounded-lg hover:bg-[#FFD746]/20 transition-colors border border-[#FFD746]/30">
                        <LuMail className="text-[#FFD746] text-2xl shrink-0 mt-1" />
                        <div>
                          <h2 className="text-xl font-passion font-semibold text-white mb-2">
                            Email
                          </h2>
                          <a
                            href="mailto:info@planb-restaurant.com"
                            className="text-white/90 hover:text-white transition-colors"
                          >
                            info@planb-restaurant.com
                          </a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4 p-4 bg-[#FFD746]/10 rounded-lg hover:bg-[#FFD746]/20 transition-colors border border-[#FFD746]/30">
                        <LuMapPin className="text-[#FFD746] text-2xl shrink-0 mt-1" />
                        <div>
                          <h2 className="text-xl font-passion font-semibold text-white mb-2">
                            Location
                          </h2>
                          <p className="text-white/90">
                            123 Restaurant Street
                            <br />
                            Beirut, Lebanon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="order-1 lg:order-2" ref={formRef}>
                <div className="space-y-6">
                  <div ref={heroTitleRef}>
                    <h2 className="text-5xl lg:text-6xl xl:text-7xl font-passion font-montserrat text-[#FFD746] mb-4 leading-tight drop-shadow-lg">
                      Contact Us
                    </h2>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      Please fill out the form below with your contact
                      information and message. Our team will get back to you as
                      soon as possible.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <div className="relative">
                      <label htmlFor="name" className="sr-only">
                        Full Name
                      </label>
                      <div className="relative">
                        <LuUserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD746] text-xl" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={() => handleBlur("name")}
                          className={`w-full pl-12 ${errors.name ? "pr-12" : "pr-4"} py-4 bg-white/5 border-2 ${errors.name ? "border-red-500" : "border-[#436436]/30"} rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-500" : "focus:ring-[#FFD746]"} focus:border-[#FFD746] transition-all`}
                          placeholder="Full Name"
                          required
                          aria-label="Full Name"
                          aria-invalid={errors.name}
                        />
                        {errors.name && (
                          <LuCircleAlert className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xl" />
                        )}
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1 ml-1">
                          Please enter a valid name (letters only)
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label htmlFor="email" className="sr-only">
                        Email Address
                      </label>
                      <div className="relative">
                        <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD746] text-xl" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur("email")}
                          className={`w-full pl-12 ${errors.email ? "pr-12" : "pr-4"} py-4 bg-white/5 border-2 ${errors.email ? "border-red-500" : "border-[#436436]/30"} rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-[#FFD746]"} focus:border-[#FFD746] transition-all`}
                          placeholder="Email Address"
                          required
                          aria-label="Email Address"
                          aria-invalid={errors.email}
                        />
                        {errors.email && (
                          <LuCircleAlert className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xl" />
                        )}
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1 ml-1">
                          Please enter a valid email address
                        </p>
                      )}
                    </div>

                    {/* Phone with Country Code */}
                    <div className="relative">
                      <label htmlFor="phone" className="sr-only">
                        Phone Number
                      </label>
                      <div
                        className={`relative phone-input-wrapper ${errors.phone ? "phone-input-error" : ""}`}
                      >
                        <PhoneInput
                          international
                          defaultCountry="LB"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onBlur={() => handleBlur("phone")}
                          aria-label="Phone Number"
                          aria-invalid={errors.phone}
                        />
                        {errors.phone && (
                          <LuCircleAlert className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xl pointer-events-none z-10" />
                        )}
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1 ml-1">
                          Please enter a valid phone number
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label htmlFor="message" className="sr-only">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white/5 border-2 border-[#436436]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD746] focus:border-[#FFD746] transition-all resize-none"
                        placeholder="Your Message"
                        required
                        aria-label="Your Message"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.phone ||
                        !formData.message
                      }
                      className="w-full bg-[#FFD746] hover:bg-[#ffd746]/90 text-[#1a1a1a] font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:hover:bg-[#FFD746]"
                    >
                      <span>Send Message</span>
                      <LuSend className="text-xl" />
                    </button>

                    {/* Form Status Message */}
                    {formStatus && (
                      <div className="p-4 bg-[#436436]/30 border-2 border-[#FFD746] rounded-lg text-white text-center font-semibold">
                        {formStatus}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqSectionRef}
          className="w-full bg-gradient-to-br from-[#2d2d2d] to-[#252525] py-20 px-5"
        >
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-passion font-bold text-[#FFD746] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div
                ref={(el) => (faqCardsRef.current[0] = el)}
                className="bg-[#436436]/20 p-6 rounded-lg border-2 border-[#436436]/40 hover:border-[#FFD746]/60 transition-all"
              >
                <h3 className="text-xl font-semibold text-[#FFD746] mb-3">
                  Do you take reservations?
                </h3>
                <p className="text-white/80">
                  Yes! We recommend making reservations, especially for weekends
                  and holidays. Call us at +961 71 459 869.
                </p>
              </div>
              <div
                ref={(el) => (faqCardsRef.current[1] = el)}
                className="bg-[#436436]/20 p-6 rounded-lg border-2 border-[#436436]/40 hover:border-[#FFD746]/60 transition-all"
              >
                <h3 className="text-xl font-semibold text-[#FFD746] mb-3">
                  What cuisine do you serve?
                </h3>
                <p className="text-white/80">
                  We offer a diverse menu featuring international and local
                  Lebanese cuisine with a modern twist.
                </p>
              </div>
              <div
                ref={(el) => (faqCardsRef.current[2] = el)}
                className="bg-[#436436]/20 p-6 rounded-lg border-2 border-[#436436]/40 hover:border-[#FFD746]/60 transition-all"
              >
                <h3 className="text-xl font-semibold text-[#FFD746] mb-3">
                  Do you offer vegetarian options?
                </h3>
                <p className="text-white/80">
                  Absolutely! We have a variety of vegetarian and vegan dishes
                  available on our menu.
                </p>
              </div>
              <div
                ref={(el) => (faqCardsRef.current[3] = el)}
                className="bg-[#436436]/20 p-6 rounded-lg border-2 border-[#436436]/40 hover:border-[#FFD746]/60 transition-all"
              >
                <h3 className="text-xl font-semibold text-[#FFD746] mb-3">
                  Is parking available?
                </h3>
                <p className="text-white/80">
                  Yes, we have valet parking service available for our guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location/Map Section */}
        <section className="w-full bg-gradient-to-br from-[#3a3a3a] to-[#2a2a2a] py-20 px-5">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-passion font-bold text-[#FFD746] text-center mb-12">
              Visit Us
            </h2>
            <div
              ref={mapSectionRef}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Map */}
              <div className="bg-[#436436]/10 border-2 border-[#436436]/30 rounded-2xl overflow-hidden h-96 lg:h-125">
                <iframe
                  title="Plan-B Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3326.2258064436146!2d35.822845!3d33.5215143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ed700136b64d5%3A0x99ab521fca023c19!2sPlan-B!5e0!3m2!1sen!2sro!4v1769643153751!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Directions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-passion font-semibold text-[#FFD746]">
                  How to Find Us
                </h3>
                <div className="space-y-4 text-white/80">
                  <p className="leading-relaxed">
                    Plan-B Restaurant is conveniently located in Rashaya,
                    Lebanon, easily accessible from all major areas of South
                    Lebanon and Beirut.
                  </p>
                  <div className="bg-[#436436]/20 p-6 rounded-lg border-2 border-[#436436]/40">
                    <h4 className="font-semibold text-[#FFD746] mb-3">
                      Address:
                    </h4>
                    <p className="text-white/90">
                      Plan-B Restaurant
                      <br />
                      Rashaya, Lebanon
                      <br />
                      Bekaa Governorate
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#FFD746]">
                      Getting Here:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                      <li>Easily accessible from Zahle (45-minute drive)</li>
                      <li>Located in central Rashaya</li>
                      <li>Valet parking available</li>
                    </ul>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=33.5215143,35.822845"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FFD746] text-[#1a1a1a] hover:bg-[#ffd746]/90 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-[#5a8a48] to-[#4a7a3a] py-16 px-5 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD746] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD746] rounded-full blur-3xl"></div>
          </div>

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-passion font-bold text-[#FFD746] mb-4">
              Ready to Experience Plan-B?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Make a reservation today or visit us during our working hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+96171459869"
                className="bg-[#FFD746] text-[#1a1a1a] hover:bg-[#ffd746]/90 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl inline-block transform hover:scale-105"
              >
                Call Now
              </a>
              <a
                href="#contact-form"
                className="bg-transparent border-2 border-[#FFD746] text-[#FFD746] hover:bg-[#FFD746]/20 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-block transform hover:scale-105"
              >
                Send Message
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
