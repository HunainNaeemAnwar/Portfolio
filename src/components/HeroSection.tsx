"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "../css/loader.css";
import Link from "next/link";
const HeroSection = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await client.fetch(groq`
          *[_type == "heroSection"][0] { image }
        `);
        if (data?.image) {
          setImageUrl(urlFor(data.image).url());
        }
      } catch (error) {
        console.error("Failed to fetch hero image:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  const handleScroll = (path: string) => {
    if (!path.startsWith("#")) return;
    const section = document.querySelector<HTMLElement>(path);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.innerWidth >= 768) {
      section.classList.remove("opacity-100", "translate-y-0");
      section.classList.add("opacity-0", "translate-y-10");
      void section.offsetWidth;
      setTimeout(() => {
        section.classList.remove("opacity-0", "translate-y-10");
        section.classList.add("opacity-100", "translate-y-0");
      }, 600);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="col-span-7  place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-2 text-[50px] lg:text-[65px] ">
            <span className="   text-transparent font-Integral bg-clip-text bg-gradient-to-r from-[#bbbaba] to-[#606060]">
              Hello, I m{" "}
            </span>
            <br />
            {!loading && (
              <TypeAnimation
                key={imageUrl}
                sequence={["Hunain", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={false}
                className="font-Integral inline-block"
              />
            )}
          </h1>
          <p className="text-[#d9d9d9] font-Satoshi text-[20px] mb-6">
            Who Stays Up-To-Date With The Latest Web Development Trends And
            Technologies.
          </p>
          <div>
            <span>
              <Link
                onClick={() => handleScroll("#contact")}
                className="px-4 lg:px-6 py-2 inline-block  sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#676767] via-[#727472] to-[#383838] bg-white hover:bg-slate-100 text-white   hover:bg-gradient-to-br hover:from-[#515151] hover:via-[#828282] hover:to-[#6a6a6a] w-full font-Satoshi text-[20px]"
                href={"#contact"}
              >
                Hire Me
              </Link>
            </span>
            <a
              href="/my-resume.pdf"
              className="inline-block px-4 lg:px-6 py-2 w-full transition-all duration-400 sm:w-fit rounded-full bg-transparent hover:bg-[#6d6d6d] text-white border border-white mt-4 text-[20px] font-Satoshi"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="col-span-5 relative  rounded-full place-self-center md:mr-7 w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] bg-[#676767] m-11 md:mt-0 lg:m-11">
          {loading ? (
            <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 ">
              <span className="loader"></span>
            </div>
          ) : (
            imageUrl && (
              <Image
                src={imageUrl}
                alt="Hero Image"
                className="rounded-full"
                width={380}
                height={380}
                priority
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
