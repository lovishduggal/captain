import React from "react";
import Logo from "@/assets/Resources/logo.svg";
import { FaDiscord, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='p-8 pb-0 bg-gradient-to-tr from-[#370450] to-[#1A0226] min-h-screen'>
      <div className="flex flex-col md:flex-row mx-4 md:mx-12 my-12 md:my-20 justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                {/* <Logo className="text-base h-auto w-auto" /> */}
              </a>
            </div>
            <p className='mt-8 text-gray-300 text-base'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna amet, consectetue.
            </p>
            <div className="mt-8 md:mt-24">
              <h1 className='text-xl md:text-2xl font-medium'>Languages and Location</h1>
              <div className="mt-4 md:mt-8 space-y-4 md:space-y-0 md:space-x-5 flex flex-col md:flex-row">
                <select 
                  id='language' 
                  name='language' 
                  className='p-2 bg-transparent outline-none border-b-2 border-[#D600E1] w-full md:w-48'
                >
                  <option value="" className='text-black' disabled selected>English</option>
                  <option className='text-black' value="spanish">Spanish</option>
                  <option className='text-black' value="french">French</option>
                  <option className='text-black' value="german">German</option>
                  <option className='text-black' value="hindi">Hindi</option>
                  <option className='text-black' value="uk">United Kingdom</option>
                </select>

                <select 
                  id='country' 
                  name='country' 
                  className='p-2 bg-transparent outline-none border-b-2 border-[#D600E1] w-full md:w-48'
                >
                  <option className='text-black' value="" disabled selected>India</option>
                  <option className='text-black' value="usa">United States</option>
                  <option className='text-black' value="india">India</option>
                  <option className='text-black' value="uk">United Kingdom</option>
                  <option className='text-black' value="canada">Canada</option>
                  <option className='text-black' value="australia">Australia</option>
                </select>
              </div>
            </div>
          </div>
          <div className='mt-12 md:mt-52'>
            <p className='text-gray-500 text-sm'>Copyright © 2024 Captain Side | All Rights Reserved</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <div className="pentagon1 p-8 md:p-16 pl-8 md:pl-20 shadow-lg bg-[#310F43] flex flex-col md:flex-row justify-center items-stretch w-full h-auto md:h-full">
            {/* Left Partition */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-12 mb-6 md:mb-0">
              <a href="/" className="hover:underline">Events</a>
              <a href="/" className="hover:underline">Game Pass</a>
              <a href="/" className="hover:underline">Testing</a>
              <a href="/" className="hover:underline">About Us</a>
              <a href="/" className="hover:underline">Log in</a>
              <a href="/" className="hover:underline">Help & Support</a>
            </div>

            {/* Divider */}
            <div className="border-l border-[#D700E1] mx-0 md:mx-4 mb-6 md:mb-7"></div>

            {/* Right Partition */}
            <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col space-y-6 md:space-y-12">
              <a href="/" className="flex items-center hover:underline">
                <FaDiscord className="mr-2 w-6 h-6" /> Discord
              </a>
              <a href="/" className="flex items-center hover:underline">
                <FaInstagram className="mr-2 w-6 h-6" /> Instagram
              </a>
              <a href="/" className="flex items-center hover:underline">
                <FaYoutube className="mr-2 w-6 h-6" /> YouTube
              </a>
              <a href="/" className="flex items-center hover:underline">
                <FaEnvelope className="mr-2 w-5 h-5" /> Email
              </a>
              <a href="/" className="hover:underline">Privacy Policy</a>
              <a href="/" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
