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
    const section = document.querySelector(path) as HTMLElement;
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // ✅ Animation only for md+ screens
    if (window.innerWidth >= 768) {
      // 1️⃣ Pehle animation ko reset karo
      section.classList.remove("opacity-100", "translate-y-0");
      section.classList.add("opacity-0", "translate-y-10");

      // 2️⃣ Ensure it triggers again (force reflow)
      void section.offsetWidth; // 🔥 This forces the browser to "repaint"

      // 3️⃣ Slight delay ke baad dobara animation apply karo
      setTimeout(() => {
        section.classList.remove("opacity-0", "translate-y-10");
        section.classList.add("opacity-100", "translate-y-0");
      }, 600);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#6d6d6d] bg-opacity-100 font-Satoshi border-b border-[#d9d9d9]">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-3 lg:p-5 relative">
        {/* ✅ Portfolio Logo */}
        <div className="text-[23px] text-white font-Montserrat hover:text-slate-200">
          <Link href="/">PORTFOLIO</Link>
        </div>

        {/* ✅ Mobile Menu Button (Above Overlay) */}
        <div className="md:hidden z-[60] relative right-6 top-1 ">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white transition-transform duration-300"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6 " />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8">
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

      {/* ✅ Mobile Menu Overlay (Now Closes with Animation) */}
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
