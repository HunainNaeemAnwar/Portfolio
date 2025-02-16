import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import AboutSection from "./AboutSection"; // Client Component

async function getData() {
  const aboutData = await client.fetch(
    groq`*[_type == "about"][0]{
     ...,
    }`
  );
  return aboutData;
}

const AboutSectionWrapper = async () => {
  const aboutData = await getData();
  return <AboutSection aboutData={aboutData} />;
};

export default AboutSectionWrapper;
