import { PropsWithChildren } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children }: 
    PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        `bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
         after:-z-10 after:content-[''] after:absolute after:inset-0 
         after:outline-2 after:outline after:-outline-offset-2 
         after:rounded-3xl after:outline-white/20 px-6 sm:px-8 pt-8 pb-6 
         after:pointer-events-none md:pt-12 md:px-20`,
        className // Allows overriding styles
      )}
    >
      {/* Background Grain Effect */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Render children inside the card */}
      {children}
    </div>
  );
};
