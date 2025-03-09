"use client";

import { SectionHeader } from "../components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import smiltememoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "JavaScript", icon: <JavascriptIcon className="w-12 h-12" /> },
  { title: "HTML5", icon: <HTMLIcon className="w-12 h-12" /> },
  { title: "CSS3", icon: <CSS3Icon className="w-12 h-12" /> },
  { title: "React", icon: <ReactIcon className="w-12 h-12" /> },
  { title: "Chrome", icon: <ChromeIcon className="w-12 h-12" /> },
  { title: "GitHub", icon: <GithubIcon className="w-12 h-12" /> },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🖌️',
    left: "5%",
    top: "5%",
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: "50%",
    top: "5%",
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "10%",
    top: "35%",
  },
  {
    title: 'Hiking',
    emoji: '⛰️',
    left: "35%",
    top: "40%",
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: "5%",
    top: "65%",
  },
  {
    title: 'Music',
    emoji: '🎻',
    left: "70%",
    top: "45%",
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 ">
      <SectionHeader
        eyebrow="About me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />

      {/* Centered Container with Max Width */}
      <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: My Reads and Beyond the Code */}
          <div className="space-y-6">
            {/* My Reads Card - Square */}
            <Card className="p-6 flex flex-col items-center gap-4 h-[350px] w-[300px] mx-auto">
              <div className="flex items-center font-serif text-2xl gap-2 justify-center">
                <StarIcon className="w-6 h-6 text-emerald-300" />
                <h3 className="text-2xl font-serif text-white">My Reads</h3>
              </div>
              <p className="text-gray-400 text-sm text-center">Explore the books shaping my perspective.</p>
              <Image src={bookImage} alt="Book Cover" width={100} height={150} className="rounded-lg" />
            </Card>

            {/* Beyond the Code Card - Rectangle */}
            <Card className="p-6 flex flex-col items-center gap-4 relative h-[300px]">
              <div className="flex items-center gap-2 justify-center">
                <StarIcon className="w-8 h-8 text-emerald-300" />
                <h3 className="text-3xl font-serif text-white">Beyond the Code</h3>
              </div>
              <p className="text-gray-400 text-base text-center">Explore my interests and hobbies beyond the digital realm.</p>
              <div className="relative w-full h-full " ref=
              {constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{ left: hobby.left, top: hobby.top 
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="text-xl font-medium text-gray-950">{hobby.title}</span>
                    <span className="text-xl">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: My Toolbox and Map */}
          <div className="space-y-6">
            {/* My Toolbox Card - Rectangle */}
            <Card className="p-6 flex flex-col items-center gap-2 h-[300px] overflow-hidden">
              <div className="flex items-center text-3xl gap-2 justify-center">
                <StarIcon className="w-8 h-8 text-emerald-300" />
                <h3 className="text-3xl font-serif text-white">My Toolbox</h3>
              </div>
              <p className="text-gray-400 text-base text-center">
                Explore the technologies and tools I use to craft exceptional digital experiences.
              </p>

              {/* Marquee Container */}
              <div className="w-full overflow-hidden">
  <div className="flex animate-marquee-left whitespace-nowrap min-w-max">
    {/* Duplicate toolbox items for seamless looping */}
    {[...toolboxItems, ...toolboxItems].map((item, index) => (
      <div
        key={`${item.title}-${index}`}
        className="inline-flex items-center gap-4 py-2 px-3 rounded-lg mx-2"
      >
        <span className="text-emerald-300">{item.icon}</span>
        <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-400">
          {item.title}
        </span>
      </div>
    ))}
  </div>
</div>

<div className="w-full overflow-hidden">
  <div className="flex animate-marquee-right whitespace-nowrap min-w-max">
    {/* Duplicate toolbox items for seamless looping */}
    {[...toolboxItems, ...toolboxItems].map((item, index) => (
      <div
        key={`${item.title}-${index}`}
        className="inline-flex items-center gap-4 py-2 px-3 rounded-lg mx-2"
      >
        <span className="text-emerald-300">{item.icon}</span>
        <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-400">
          {item.title}
        </span>
      </div>
    ))}
  </div>
</div>

            </Card>

            {/* Map and Smiling Memoji Image - Square */}
<div className="relative w-[300px] h-[300px] mx-auto">
  {/* Map Image */}
  <Image
    src={MapImage}
    alt="map"
    fill // Fill the container
    style={{ objectFit: 'cover', borderRadius: '8px' }} // Ensure the image covers the container
  />

  {/* Smiling Memoji with Ping Animation */}
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      background: 'linear-gradient(to right, #0ea5e9, #059669)', // Gradient background
      padding: '10px',
      border: '2px solid white', // White border
    }}
  >
    {/* Ping Animation */}
    <div className="absolute inset-0 rounded-full bg-emerald-300/50 animate-ping"></div>

    {/* Smiling Memoji */}
    <Image
      src={smiltememoji}
      alt="smiling memoji"
      width={40}
      height={40}
    />
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};