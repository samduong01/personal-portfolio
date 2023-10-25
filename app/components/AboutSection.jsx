"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Software Skills",
    id: "softskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>C</li>
        <li>Python</li>
        <li>SQL</li>
        <li>MySQL</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next.js</li>
        <li>Flutter</li>
        <li>Dart</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Git</li>
        <li>Android</li>
        <li>Linux</li>
        <li>x86-64</li>
        <li>Assembly</li>
        <li>GDB</li>
        <li>Docker</li>
        <li>Planning Algorithms</li>
        <li>MatLab</li>
        <li>Appwrite</li>
      </ul>
    ),
  },
  {
    title: "Hardware Skills",
    id: "hardskills",
    content: (
      <ul className="list-disc pl-2">
        <li>CAD (Fusion 360 & OnShape)</li>
        <li>CNC</li>
        <li>CAM (Fusion 360)</li>
        <li>3D Printing (FDM and SLS)</li>
        <li>Soldering</li>
        <li>Oscilloscope</li>
        <li>Electrical Wiring</li>
        <li>Arduino</li>
        <li>Motors & Servos</li>
        <li>Mechanism Design</li>
        <li>Manual Tools, Power Tools</li>
        <li>Metal Working</li>
        <li>Wood Working</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Brown University | Bachelor of Science - Sc.B in Computer Engineering Sep 2022 - May 2026</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("softskills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Computer Engineering student at Brown University with a deep passion for the intricate intersection of software and hardware as well as leading teams. 
          <br />
          <br />
          This passion all started when I founded my robotics team Kuriosity Robotics when I was 11. 
          I grew up building and programming robots which sparked my interest in solving problems using engineering. 
          <br />
          <br />
          What truly excites me is when I get to blend software and hardware, 
          crafting solutions that span both domains. At the same time, I&apos;m no stranger to diving deep into specialized areas when a project calls for it.
          <br />
          <br />
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
          In the realm of software, I&apos;ve written critical C code for NASA&apos;s Lunar Gateway Space Station, 
          developed Python simulations for CAT excavators in a 3D environment, and am currently crafting cross-platform applications using Flutter.
          <br />
          <br />
          Complementing my software expertise, I bring substantial hardware acumen. 
          I have designed and manufactured 7 robots utilizing CAD, CNC, 3D printing, and manual fabrication techniques that have won numerous competitions and awards. 
          <br />
          <br />
          Throughout my experiences, I&apos;ve had the privilege of collaborating with outstanding teams. Leading a robotics team revealed my passion for growing teams from the ground up. I believe my diverse skill set in, leadership, software, and hardware, can add significant value to your team.
          I have a strong commitment to continuous learning and I&apos;m eager to leverage internship opportunities to delve deeper into areas like machine learning, computer vision, embedded systems, and mechatronics         
           <br />
          <br />
          Outside of engineering, I enjoy arranging songs on the guitar, riding the waves whenever I can, and passionately supporting the Chicago Bears.
          </p>
        </div>
      <div className="flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("softskills")}
          active={tab === "softskills"}
        >
          {" "}
          Software Skills{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("hardskills")}
          active={tab === "hardskills"}
        >
          {" "}
          Hardware Skills{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          {" "}
          Education{" "}
        </TabButton>
      </div>
      <div className="mt-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>  
    </section>
  );
};

export default AboutSection;
