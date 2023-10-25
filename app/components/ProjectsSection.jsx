"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tune App",
    description: "Music Social Media App",
    image: "/images/projects/kbitetune.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/Sam_KBiteMusic_Portfolio_Page.pdf",
  },
  {
    id: 2,
    title: "Robotics Projects",
    description: "Code and Mechanisms I designed for Kuriosity Robotics",
    image: "/images/projects/robot-image2.png",
    tag: ["All", "Engineering"],
    gitUrl: "https://github.com/KuriosityRobotics/freight-frenzy",
    previewUrl: "/Sam_Kuriosity_Portfolio_Page.pdf",
  },
  {
    id: 3,
    title: "Mini Solar Car Project",
    description: "Mini Solar Car Project",
    image: "/",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Vibration Isolator",
    description: "Project 4 description",
    image: "/",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Prediction Program for NFL Hall of Fame",
    description: "Project 5 description",
    image: "/",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Home Alarm System",
    description: "Project 5 description",
    image: "/",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Simulate Space Suit",
    description: "Project 5 description",
    image: "/",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Shower Timer Project",
    description: "Project 5 description",
    image: "/",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Engineering"
          isSelected={tag === "Engineering"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
