"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion"; 
import "../css/loader.css";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string[];
  githubLink: string;
  vercelLink: string;
}

const ProjectSection = () => {
  const [projectsData, setProjectsData] = useState<Project[] | null>(null);
  const [tag, setTag] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data: Project[] = await client.fetch(
          groq`*[_type == "project"]{
            _id,
            title,
            description,
            "imageUrl": image.asset->url,
            tag,
            githubLink,
            vercelLink
          }`
        );
        setProjectsData(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
        setError("There was an error fetching the projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projectsData
    ? projectsData.filter(
        (project) => tag === "All" || project.tag?.includes(tag)
      )
    : [];

  return (
    <section
      id="project"
      className="md:py-32 py-16 mt-[300px] md:mt-0 opacity-95 translate-y-10 transition-all duration-700 ease-in-out"
    >
      <h2 className="mb-4 text-white font-Integral text-center font-bold text-[32px] md:text-[26px] lg:text-[32px]">
        My Projects
      </h2>

      <div className="flex flex-row justify-center items-center gap-3 mt-6 mb-10 text-white">
        {["All", "Web", "Mobile"].map((category,index) => (
          <ProjectTags
            key={index}
            onClick={() => setTag(category)}
            name={category}
            isSelected={tag === category}
            aria-label={`Filter projects by ${category}`}
          />
        ))}
      </div>

      {loading ? (
        <div className="text-white text-center relative top-24 p-6">
          <span className="loader"></span>
        </div>
      ) : error ? (
        <p className="text-white text-center">{error}</p>
      ) : filteredProjects.length === 0 ? (
        <p className="text-white flex justify-center font-Satoshi items-center text-center">
          No projects found.
        </p>
      ) : (
        <motion.div
          key={tag} 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project._id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <ProjectCard
                title={project.title}
                descrition={project.description}
                imgUrl={project.imageUrl}
                git={project.githubLink || "#"}
                vercel={project.vercelLink || "#"}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default ProjectSection;
