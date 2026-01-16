import React from "react";
import logo from "../assets/logo_no_bg.png";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-[7vw]">
      <div className="flex flex-row justify-between mb-5">
        {/*section 1*/}
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <h2 className="font-bold text-lg">Quick Links</h2>
            <hr className="w-20 mx-auto mt-2 mb-3 border-none h-[2px] bg-[#436436] block" />
          </div>
          <ul className="flex flex-col gap-2 text-center">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Privacy Policy</a>
            </li>
            <li>
              <a href="/blog">Terms and Conditions</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/*section 2*/}
        <div>
          <img src={logo} alt="Logo" className="h-[80px] mx-auto mb-6 mt-4" />

          {/* Linked Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <SocialIcon
              network="whatsapp"
              url=""
              bgColor="grey"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              network="facebook"
              bgColor="grey"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              network="instagram"
              bgColor="grey"
              url="https://www.instagram.com/planb.restocafe/?hl=en"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              network="tiktok"
              bgColor="grey"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="flex flex-col items-center-safe">
            {/*mail*/}
            <div className="flex flex-row gap-3 mt-5 ">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              <h3 className="text-gray-800 dark:text-white">
                email@example.com
              </h3>
            </div>

            {/*phone*/}
            <div className="flex flex-row ml-[-38px] gap-3 mt-2 ">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <h3 className="text-gray-800 dark:text-white">+123 456 7890</h3>
            </div>
          </div>
        </div>

        {/*section 3*/}
        <div className="flex flex-col items-center justify-around">
          <div>
            <div className="text-center">
              <h2 className="font-bold text-lg ">Location</h2>
              <hr className="w-20 mx-auto mt-2 mb-3 border-none h-[2px] bg-[#436436] block" />
            </div>
            {/*we will integrate a google maps here later*/}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2258025979954!2d35.82771590000001!3d33.5215144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ed700136b64d5%3A0x99ab521fca023c19!2sPlan-B!5e0!3m2!1sen!2snl!4v1768565394323!5m2!1sen!2snl"
                width="350"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan B Location"
              />
            </div>
          </div>
        </div>
      </div>
      {/*end of sections*/}

      <hr className="mt-8 mb-5 border-gray-300" />
      <p className="text-center text-gray-600">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">Plan B Resto-Cafe</span> | All rights
        reserved.
      </p>
    </footer>
  );
}
