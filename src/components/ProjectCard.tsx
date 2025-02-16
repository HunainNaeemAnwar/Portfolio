import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
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
  git: string;
  vercel: string;
}) => {
  return (
    <div className="place-self-center">
      <div
        className=" w-64 h-48 mr-0 rounded-t-lg relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute top-0 left-0 right-0 w-full h-full hidden bg-[#000] transition-all duration-300  rounded-t-lg bg-opacity-0 group-hover:flex group-hover:bg-opacity-80   items-center justify-center">
          <Link href={git} target="_blank">
            <CodeBracketIcon className="w-6 h-6 m-2 cursor-pointer text-[#979696] hover:text-white" />
          </Link>
          <Link href={vercel} target="_blank">
            <EyeIcon className="w-6 h-6 m-2 cursor-pointer  text-[#979696] hover:text-white" />
          </Link>
        </div>
      </div>
      <Link href={vercel}>
        {" "}
        <div className="text-white rounded-b-lg w-64 h-20   bg-[#6d6d6d] text-center  px-1 py-2">
          <h5 className="font-semibold text-[20px] mb-1 font-Satoshi">
            {title}
          </h5>
          <div>
            <p className="text-[16px] mb-1 font-Poppins leading-[14px]">
              {descrition.slice(0, 40)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProjectCard;
