"use client";
import { useState } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";
import { toast } from "react-hot-toast";

const EmailSection = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!", {
          duration: 4000,
          style: {
            background: "#4caf50",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "12px 16px",
          },
        });
        setForm({ email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.", {
          duration: 4000,
          style: {
            background: "#f44336",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "12px 16px",
          },
        });
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(
        "Something went wrong. Please check your internet connection.",
        {
          duration: 4000,
          style: {
            background: "#f44336",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "12px 16px",
          },
        }
      );
    }

    setLoading(false);
  };

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 pt-20 my-12 gap-4 md:pt-32 opacity-95 translate-y-10 transition-all duration-700 ease-in-out"
      id="contact"
    >
      <div>
        <h5 className="text-white font-Satoshi text-center font-medium text-[32px] md:text-[26px] lg:text-[32px]">
          Let&apos;s Connect
        </h5>
        <p className="text-white text-[18px] leading-[35px] mb-6 mt-[11px] max-w-md font-Poppins">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I’ll try my best to get back to you.
        </p>
        <div className="flex flex-row gap-4">
          <Link
            href="https://www.linkedin.com/in/hunain-naeem-anwar-b26606362/"
            target="_blank"
          >
            <SiLinkedin className="w-6 h-6 text-[#ffffff] hover:text-slate-300" />
          </Link>
          <Link href="https://github.com/HunainNaeemAnwar" target="_blank">
            <SiGithub className="w-6 h-6 text-[#ffffff] hover:text-slate-300" />
          </Link>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-Satoshi text-[#d9d9d9] text-[18px]"
        >
          <label htmlFor="email" className="text-white mt-4 md:mt-0">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter Here"
            value={form.email}
            onChange={handleChange}
            className="bg-[#18191E] text-[18px] rounded-md p-2 pl-3 w-full"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
          <label htmlFor="subject" className="text-white mt-1 md:mt-0">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            placeholder="Enter Here"
            value={form.subject}
            onChange={handleChange}
            className="bg-[#18191E] rounded-md p-2 pl-3 w-full text-[18px] "
          />
          <label htmlFor="message" className="text-white mt-1 md:mt-0">
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="Enter Here"
            value={form.message}
            onChange={handleChange}
            className="bg-[#18191E] h-20 p-2 rounded-md pl-3 w-full "
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-[#676767] via-[#727472] to-[#383838] text-white font-Satoshi text-[18px] py-2.5 rounded-lg hover:from-[#515151] hover:via-[#828282] hover:to-[#6a6a6a] w-full"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
