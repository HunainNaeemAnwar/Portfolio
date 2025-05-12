import React from "react";

const ProjectTags = ({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}) => {
  const isButtonActive = isSelected
    ? "bg-gradient-to-br from-[#676767] via-[#727472] to-[#383838] font-Satoshi "
    : "bg-transparent rounded-full border-2 hover:border-white px-6 py-2 text-[18px] md:text-[20px] cursor-pointer border-slate-500 font-Satoshi   ";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${isButtonActive}rounded-full border-2  px-6 py-2 text-[17px] md:text-[20px] font-Satoshi cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTags;
