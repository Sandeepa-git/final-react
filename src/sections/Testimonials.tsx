"use client";

import { useState, useRef, useEffect } from "react";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Senior Product Manager @GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "Chief Executive Officer @InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Production Manager @GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Head of Digital Marketing @Tech Innovations Ltd",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const startMarquee = () => {
    let position = scrollPosition;

    const animate = () => {
      if (!isHovered && marqueeRef.current) {
        position -= 1; // Adjust speed here
        if (position < -marqueeRef.current.scrollWidth / 2) {
          position = 0; // Reset position for seamless looping
        }
        setScrollPosition(position);
        marqueeRef.current.style.transform = `translateX(${position}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const stopMarquee = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startMarquee();
    } else {
      stopMarquee();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        {/* Marquee Container */}
        <div
          className="relative overflow-hidden mt-10 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={marqueeRef}
            className="flex gap-4"
            style={{ width: "max-content" }}
          >
            {/* Duplicate testimonials for seamless looping */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden w-[350px] flex-shrink-0 border border-white/50 testimonial-card hover:rotate-2 transition-transform duration-300"
              >
                {/* Background Grain Effect */}
                <div
                  className="absolute inset-0 z-0 opacity-10"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  {/* Avatar + Name + Position */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar with Rounded Background */}
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>

                    {/* Name & Position */}
                    <div>
                      <div className="text-lg font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="mt-4 text-white/80">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};