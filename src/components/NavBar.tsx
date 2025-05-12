"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = (path: string) => {
    if (!path.startsWith("#")) return;
    
    try {
      const section = document.querySelector<HTMLElement>(path);
      if (!section) {
        console.error(`Section with path "${path}" not found.`);
        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // Smooth animation for large screens
      if (window.innerWidth >= 768) {
        section.classList.remove("opacity-100", "translate-y-0");
        section.classList.add("opacity-0", "translate-y-10");
        void section.offsetWidth; // Force reflow to trigger transition
        setTimeout(() => {
          section.classList.remove("opacity-0", "translate-y-10");
          section.classList.add("opacity-100", "translate-y-0");
        }, 500);
      }

      if (navbarOpen) {
        setNavbarOpen(false);
      }
    } catch (error) {
      console.error("Error while handling scroll:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#6d6d6d] border-b border-[#d9d9d9] font-Satoshi">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8 lg:py-5">
        <Link href="/" className="text-[23px] text-white font-Montserrat font-medium hover:text-slate-200">
          PORTFOLIO
        </Link>
        <div className="md:hidden relative z-50">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-white">
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.path)}
              className="text-white hover:text-slate-200"
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>

      <MenuOverlay
        links={navLinks}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        handleScroll={handleScroll}
      />
    </nav>
  );
};

export default NavBar;
