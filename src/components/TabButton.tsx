import React from "react";

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) => {
  const buttonClasses = active
    ? "text-white border-b-[2px] border-[#605F5E]  text-[20px] lg:text-[22px] font-poppins "
    : "text-[#ADB7BE] text-[20px] lg:text-[22px] font-poppins  ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-2 font-medium hover:text-white ${buttonClasses}`}>
        {" "}
        {children}
      </p>
    </button>
  );
};

export default TabButton;
