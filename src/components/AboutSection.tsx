"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { urlFor } from "@/sanity/lib/image";
import "../css/loader.css";

const AboutSection = ({ aboutData }: { aboutData: any }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const tab_data = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc text-[20px] font-Poppins pl-2 space-y-3">
          {aboutData?.skills?.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 text-[20px] font-Poppins space-y-3">
          {aboutData?.education?.map((edu: string, index: number) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2 text-[20px] font-Poppins space-y-3">
          {aboutData?.experience?.map((exp: string, index: number) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white font-Poppins md:py-10 opacity-95 translate-y-10 transition-all duration-700 ease-in-out"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 text-start xl:gap-16 sm:py-16 xl:px-16">
        {aboutData?.image && (
          <div className="relative md:w-52 md:h-52 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            {isLoading && (
              <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 ">
                <span className="loader"></span>
              </div>
            )}
            <Image
              src={urlFor(aboutData.image).url()}
              alt="my-image"
              className={`absolute w-full h-full md:block rounded-lg  ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              width={300}
              height={300}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        )}
        <div className="md:mt-0 text-left flex flex-col h-[700px]">
          <h1 className="mb-4 text-white font-Integral text-center font-bold text-[32px] md:text-[26px] lg:text-[32px]">
            About Me
          </h1>
          <p className="text-white text-[20px] font-Poppins">
            {aboutData.title ? aboutData.title : "No Data"}
          </p>
          <div className="flex flex-row justify-start font-Satoshi gap-1 lg:gap-2 mt-10">
            {tab_data.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-6 text-[20px] font-Poppins">
            {tab_data.find((t) => t.id === tab)?.content || (
              <p>No data found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
