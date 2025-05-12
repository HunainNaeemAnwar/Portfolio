import React from "react";

const MenuOverlay = ({
  links,
  navbarOpen,
  setNavbarOpen,
  handleScroll,
}: {
  links: { path: string; title: string }[];
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
  handleScroll: (path: string) => void;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 z-40 flex justify-center font-Satoshi items-center transition-all duration-500 ease-in-out ${
        navbarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-40"
      }`}
    >
      <ul className="flex flex-col space-y-6 text-white text-lg">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => {
                handleScroll(link.path);
                setNavbarOpen(false); 
              }}
              className="text-white hover:text-gray-300 text-xl"
            >
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
