import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import AboutSection from "./AboutSection"; 

async function getData() {
  try {
    const aboutData = await client.fetch(
      groq`*[_type == "about"][0]{
        ...,
      }`
    );
    return aboutData;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

const AboutSectionWrapper = async () => {
  const aboutData = await getData();
  
  if (!aboutData) {
    return <div>Error loading about section.</div>;
  }

  return <AboutSection aboutData={aboutData} />;
};

export default AboutSectionWrapper;
