import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  imgUrl,
  title,
  descrition,
  git,
  vercel,
}: {
  imgUrl: string;
  title: string;
  descrition: string;
  git?: string;
  vercel?: string;
}) => {
  return (
    <div className="place-self-center transition-transform hover:scale-[1.03]">
      <div className="w-64 h-48 rounded-t-xl relative group overflow-hidden shadow-md">
        <Link href={vercel || "/"}>
          <div
            className="w-full h-full"
            style={{
              background: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/90 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition duration-200 text-sm font-Montserrat">Preview</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="rounded-b-xl w-64 bg-[#6d6d6d] text-white px-4 py-5 shadow-lg">
        <h5 className="font-semibold text-lg mb-2 font-Poppins">{title}</h5>
        <p className="text-sm text-gray-200 leading-6 font-Poppins">{descrition}</p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href={git||"/"}
            className="flex items-center gap-2 px-3 py-2 bg-[#212121] rounded-md hover:bg-[#333] transition"
          >
            <BsGithub className="w-5 h-5" />
            Code
          </Link>

          <Link
            href={vercel ||"/"}
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#947458] to-[#af8d6d] text-black rounded-md hover:scale-105 transition"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
