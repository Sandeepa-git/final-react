'use client';

import React from 'react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const handleContactClick = () => {
    console.log('Opening email...');
    window.location.href = 'mailto:agsvwimalasiri@gmail.com'; // Opens email client
  };

  return (
    <div className="container relative">
      <div className="py-16 pt-12">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden">
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: 'cover',
              pointerEvents: 'none',
            }}
          ></div>
          
          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative">
            <div className="text-left">
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            
            {/* Contact Button - Click to Email */}
            <button 
              onClick={handleContactClick}
              className="flex items-center justify-center text-white bg-gray-900 px-6 h-12 rounded-xl gap-2 hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap md:w-auto w-full cursor-pointer z-50"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
