"use client";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 pt-20 my-12 gap-4 md:pt-32 opacity-95 translate-y-10 transition-all duration-700 ease-in-out"
      id="contact"
    >
      <div>
        {" "}
        <h5 className=" text-white font-Satoshi text-center font-medium  text-[32px] md:text-[26px] lg:text-[32px] ">
          Let&apos;s Connect
        </h5>
        <p className="text-[#d9d9d9 ] text-white  text-[20px] mb-6 mt-[11px] max-w-md font-Poppins ">
          I&apos;m Currnetly Looking For New Opportunitie.My Inbox Is Always
          Open.whether You Have a Question or Just Want To Say Hi,I Will Try My
          Best To Get Back To You.
        </p>
        <div className=" flex flex-row gap-4">
          <Link
            href={"https://www.linkedin.com/in/hunain-naeem-anwar-20234a300/"}
          >
            <SiLinkedin className="w-6 h-6 text-[#ffffff] hover:text-slate-300" />
          </Link>
          <Link href={"https://github.com/HunainNaeemAnwar"}>
            <SiGithub className="w-6 h-6 text-[#ffffff] hover:text-slate-300" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4 font-Satoshi text-[#d9d9d9] text-[20px]">
          <label htmlFor="email" className="text-white mt-4 md:mt-0">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter Here"
            className="bg-[#18191E]  rounded-md p-2  pl-3 w-full focus-outline-none focus:border-[#605F5E]"
          />
          <label htmlFor="subject" className="text-white mt-1  md:mt-0">
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            required
            placeholder="Enter Here"
            className="bg-[#18191E]  rounded-md p-2 pl-3 w-full focus-outline-none focus:border-[#605F5E]"
          />
          <label htmlFor="message" className="text-white mt-1  md:mt-0">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Enter Here"
            className="bg-[#18191E] h-10 p-1  rounded-md  pl-3 w-full focus-outline-none focus:border-[#605F5E]"
          />
          <button className="bg-gradient-to-br from-[#676767] via-[#727472] to-[#383838] bg-white hover:bg-slate-100   text-white  font-Satoshi text-[20px] py-2.5 rounded-lg hover:bg-gradient-to-br hover:from-[#515151] hover:via-[#828282] hover:to-[#6a6a6a] w-full ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
