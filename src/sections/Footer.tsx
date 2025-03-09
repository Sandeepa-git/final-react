// Add "use client" at the top to make this a Client Component
"use client";

import { useState, useEffect } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"; // Ensure this is a React component

const footerLinks = [
  { title: "Facebook", href: "https://web.facebook.com/sandeepa.vimukthi.12/" },
  { title: "Instagram", href: "https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/sandeepa-vimukthi-92ab0a277/?originalSubdomain=lk" },
  { title: "Github", href: "https://github.com/Sandeepa-git" },
];

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative" role="contentinfo">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {footerLinks.map((link) => (
              <a key={link.title} href={link.href} aria-label={`Visit our ${link.title}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {isVisible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition duration-300"
          aria-label="Back to top">
          ↑
        </button>
      )}
    </footer>
  );
};
